"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStreamCursor = exports.ChangeStream = void 0;
const Denque = require("denque");
const timers_1 = require("timers");
const collection_1 = require("./collection");
const constants_1 = require("./constants");
const abstract_cursor_1 = require("./cursor/abstract_cursor");
const db_1 = require("./db");
const error_1 = require("./error");
const mongo_client_1 = require("./mongo_client");
const mongo_types_1 = require("./mongo_types");
const aggregate_1 = require("./operations/aggregate");
const execute_operation_1 = require("./operations/execute_operation");
const utils_1 = require("./utils");
/** @internal */
const kResumeQueue = Symbol('resumeQueue');
/** @internal */
const kCursorStream = Symbol('cursorStream');
/** @internal */
const kClosed = Symbol('closed');
/** @internal */
const kMode = Symbol('mode');
const CHANGE_STREAM_OPTIONS = [
    'resumeAfter',
    'startAfter',
    'startAtOperationTime',
    'fullDocument',
    'fullDocumentBeforeChange',
    'showExpandedEvents'
];
const CHANGE_DOMAIN_TYPES = {
    COLLECTION: Symbol('Collection'),
    DATABASE: Symbol('Database'),
    CLUSTER: Symbol('Cluster')
};
const SELECTION_TIMEOUT = 30000;
const CHANGE_STREAM_EVENTS = [constants_1.RESUME_TOKEN_CHANGED, constants_1.END, constants_1.CLOSE];
const NO_RESUME_TOKEN_ERROR = 'A change stream document has been received that lacks a resume token (_id).';
const NO_CURSOR_ERROR = 'ChangeStream has no cursor';
const CHANGESTREAM_CLOSED_ERROR = 'ChangeStream is closed';
/**
 * Creates a new Change Stream instance. Normally created using {@link Collection#watch|Collection.watch()}.
 * @public
 */
class ChangeStream extends mongo_types_1.TypedEventEmitter {
    /**
     * @internal
     *
     * @param parent - The parent object that created this change stream
     * @param pipeline - An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents
     */
    constructor(parent, pipeline = [], options = {}) {
        super();
        this.pipeline = pipeline;
        this.options = options;
        if (parent instanceof collection_1.Collection) {
            this.type = CHANGE_DOMAIN_TYPES.COLLECTION;
        }
        else if (parent instanceof db_1.Db) {
            this.type = CHANGE_DOMAIN_TYPES.DATABASE;
        }
        else if (parent instanceof mongo_client_1.MongoClient) {
            this.type = CHANGE_DOMAIN_TYPES.CLUSTER;
        }
        else {
            throw new error_1.MongoChangeStreamError('Parent provided to ChangeStream constructor must be an instance of Collection, Db, or MongoClient');
        }
        this.parent = parent;
        this.namespace = parent.s.namespace;
        if (!this.options.readPreference && parent.readPreference) {
            this.options.readPreference = parent.readPreference;
        }
        this[kResumeQueue] = new Denque();
        // Create contained Change Stream cursor
        this.cursor = this._createChangeStreamCursor(options);
        this[kClosed] = false;
        this[kMode] = false;
        // Listen for any `change` listeners being added to ChangeStream
        this.on('newListener', eventName => {
            if (eventName === 'change' && this.cursor && this.listenerCount('change') === 0) {
                this._streamEvents(this.cursor);
            }
        });
        this.on('removeListener', eventName => {
            var _a;
            if (eventName === 'change' && this.listenerCount('change') === 0 && this.cursor) {
                (_a = this[kCursorStream]) === null || _a === void 0 ? void 0 : _a.removeAllListeners('data');
            }
        });
    }
    /** @internal */
    get cursorStream() {
        return this[kCursorStream];
    }
    /** The cached resume token that is used to resume after the most recently returned change. */
    get resumeToken() {
        var _a;
        return (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.resumeToken;
    }
    hasNext(callback) {
        this._setIsIterator();
        return (0, utils_1.maybePromise)(callback, cb => {
            this._getCursor((err, cursor) => {
                if (err || !cursor)
                    return cb(err); // failed to resume, raise an error
                cursor.hasNext(cb);
            });
        });
    }
    next(callback) {
        this._setIsIterator();
        return (0, utils_1.maybePromise)(callback, cb => {
            this._getCursor((err, cursor) => {
                if (err || !cursor)
                    return cb(err); // failed to resume, raise an error
                cursor.next((error, change) => {
                    if (error) {
                        this[kResumeQueue].push(() => this.next(cb));
                        this._processError(error, cb);
                        return;
                    }
                    this._processNewChange(change !== null && change !== void 0 ? change : null, cb);
                });
            });
        });
    }
    /** Is the cursor closed */
    get closed() {
        var _a, _b;
        return this[kClosed] || ((_b = (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.closed) !== null && _b !== void 0 ? _b : false);
    }
    /** Close the Change Stream */
    close(callback) {
        this[kClosed] = true;
        return (0, utils_1.maybePromise)(callback, cb => {
            if (!this.cursor) {
                return cb();
            }
            const cursor = this.cursor;
            return cursor.close(err => {
                this._endStream();
                this.cursor = undefined;
                return cb(err);
            });
        });
    }
    /**
     * Return a modified Readable stream including a possible transform method.
     * @throws MongoDriverError if this.cursor is undefined
     */
    stream(options) {
        this.streamOptions = options;
        if (!this.cursor)
            throw new error_1.MongoChangeStreamError(NO_CURSOR_ERROR);
        return this.cursor.stream(options);
    }
    tryNext(callback) {
        this._setIsIterator();
        return (0, utils_1.maybePromise)(callback, cb => {
            this._getCursor((err, cursor) => {
                if (err || !cursor)
                    return cb(err); // failed to resume, raise an error
                return cursor.tryNext(cb);
            });
        });
    }
    /** @internal */
    _setIsEmitter() {
        if (this[kMode] === 'iterator') {
            // TODO(NODE-3485): Replace with MongoChangeStreamModeError
            throw new error_1.MongoAPIError('ChangeStream cannot be used as an EventEmitter after being used as an iterator');
        }
        this[kMode] = 'emitter';
    }
    /** @internal */
    _setIsIterator() {
        if (this[kMode] === 'emitter') {
            // TODO(NODE-3485): Replace with MongoChangeStreamModeError
            throw new error_1.MongoAPIError('ChangeStream cannot be used as an iterator after being used as an EventEmitter');
        }
        this[kMode] = 'iterator';
    }
    /**
     * Create a new change stream cursor based on self's configuration
     * @internal
     */
    _createChangeStreamCursor(options) {
        const changeStreamStageOptions = (0, utils_1.filterOptions)(options, CHANGE_STREAM_OPTIONS);
        if (this.type === CHANGE_DOMAIN_TYPES.CLUSTER) {
            changeStreamStageOptions.allChangesForCluster = true;
        }
        const pipeline = [{ $changeStream: changeStreamStageOptions }, ...this.pipeline];
        const client = this.type === CHANGE_DOMAIN_TYPES.CLUSTER
            ? this.parent
            : this.type === CHANGE_DOMAIN_TYPES.DATABASE
                ? this.parent.s.client
                : this.type === CHANGE_DOMAIN_TYPES.COLLECTION
                    ? this.parent.s.db.s.client
                    : null;
        if (client == null) {
            // This should never happen because of the assertion in the constructor
            throw new error_1.MongoRuntimeError(`Changestream type should only be one of cluster, database, collection. Found ${this.type.toString()}`);
        }
        const changeStreamCursor = new ChangeStreamCursor(client, this.namespace, pipeline, options);
        for (const event of CHANGE_STREAM_EVENTS) {
            changeStreamCursor.on(event, e => this.emit(event, e));
        }
        if (this.listenerCount(ChangeStream.CHANGE) > 0) {
            this._streamEvents(changeStreamCursor);
        }
        return changeStreamCursor;
    }
    /**
     * This method performs a basic server selection loop, satisfying the requirements of
     * ChangeStream resumability until the new SDAM layer can be used.
     * @internal
     */
    _waitForTopologyConnected(topology, options, callback) {
        (0, timers_1.setTimeout)(() => {
            if (options && options.start == null) {
                options.start = (0, utils_1.now)();
            }
            const start = options.start || (0, utils_1.now)();
            const timeout = options.timeout || SELECTION_TIMEOUT;
            if (topology.isConnected()) {
                return callback();
            }
            if ((0, utils_1.calculateDurationInMs)(start) > timeout) {
                // TODO(NODE-3497): Replace with MongoNetworkTimeoutError
                return callback(new error_1.MongoRuntimeError('Timed out waiting for connection'));
            }
            this._waitForTopologyConnected(topology, options, callback);
        }, 500); // this is an arbitrary wait time to allow SDAM to transition
    }
    /** @internal */
    _closeWithError(error, callback) {
        if (!callback) {
            this.emit(ChangeStream.ERROR, error);
        }
        this.close(() => callback && callback(error));
    }
    /** @internal */
    _streamEvents(cursor) {
        var _a;
        this._setIsEmitter();
        const stream = (_a = this[kCursorStream]) !== null && _a !== void 0 ? _a : cursor.stream();
        this[kCursorStream] = stream;
        stream.on('data', change => this._processNewChange(change));
        stream.on('error', error => this._processError(error));
    }
    /** @internal */
    _endStream() {
        const cursorStream = this[kCursorStream];
        if (cursorStream) {
            ['data', 'close', 'end', 'error'].forEach(event => cursorStream.removeAllListeners(event));
            cursorStream.destroy();
        }
        this[kCursorStream] = undefined;
    }
    /** @internal */
    _processNewChange(change, callback) {
        var _a;
        if (this[kClosed]) {
            // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
            if (callback)
                callback(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
            return;
        }
        // a null change means the cursor has been notified, implicitly closing the change stream
        if (change == null) {
            // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
            return this._closeWithError(new error_1.MongoRuntimeError(CHANGESTREAM_CLOSED_ERROR), callback);
        }
        if (change && !change._id) {
            return this._closeWithError(new error_1.MongoChangeStreamError(NO_RESUME_TOKEN_ERROR), callback);
        }
        // cache the resume token
        (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.cacheResumeToken(change._id);
        // wipe the startAtOperationTime if there was one so that there won't be a conflict
        // between resumeToken and startAtOperationTime if we need to reconnect the cursor
        this.options.startAtOperationTime = undefined;
        // Return the change
        if (!callback)
            return this.emit(ChangeStream.CHANGE, change);
        return callback(undefined, change);
    }
    /** @internal */
    _processError(error, callback) {
        const cursor = this.cursor;
        // If the change stream has been closed explicitly, do not process error.
        if (this[kClosed]) {
            // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
            if (callback)
                callback(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
            return;
        }
        // if the resume succeeds, continue with the new cursor
        const resumeWithCursor = (newCursor) => {
            this.cursor = newCursor;
            this._processResumeQueue();
        };
        // otherwise, raise an error and close the change stream
        const unresumableError = (err) => {
            if (!callback) {
                this.emit(ChangeStream.ERROR, err);
            }
            this.close(() => this._processResumeQueue(err));
        };
        if (cursor && (0, error_1.isResumableError)(error, (0, utils_1.maxWireVersion)(cursor.server))) {
            this.cursor = undefined;
            // stop listening to all events from old cursor
            this._endStream();
            // close internal cursor, ignore errors
            cursor.close();
            const topology = (0, utils_1.getTopology)(this.parent);
            this._waitForTopologyConnected(topology, { readPreference: cursor.readPreference }, err => {
                // if the topology can't reconnect, close the stream
                if (err)
                    return unresumableError(err);
                // create a new cursor, preserving the old cursor's options
                const newCursor = this._createChangeStreamCursor(cursor.resumeOptions);
                // attempt to continue in emitter mode
                if (!callback)
                    return resumeWithCursor(newCursor);
                // attempt to continue in iterator mode
                newCursor.hasNext(err => {
                    // if there's an error immediately after resuming, close the stream
                    if (err)
                        return unresumableError(err);
                    resumeWithCursor(newCursor);
                });
            });
            return;
        }
        // if initial error wasn't resumable, raise an error and close the change stream
        return this._closeWithError(error, callback);
    }
    /** @internal */
    _getCursor(callback) {
        if (this[kClosed]) {
            // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
            callback(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
            return;
        }
        // if a cursor exists and it is open, return it
        if (this.cursor) {
            callback(undefined, this.cursor);
            return;
        }
        // no cursor, queue callback until topology reconnects
        this[kResumeQueue].push(callback);
    }
    /**
     * Drain the resume queue when a new has become available
     * @internal
     *
     * @param error - error getting a new cursor
     */
    _processResumeQueue(error) {
        var _a;
        while (this[kResumeQueue].length) {
            const request = this[kResumeQueue].pop();
            if (!request)
                break; // Should never occur but TS can't use the length check in the while condition
            if (!error) {
                if (this[kClosed]) {
                    // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
                    request(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
                    return;
                }
                if (!this.cursor) {
                    request(new error_1.MongoChangeStreamError(NO_CURSOR_ERROR));
                    return;
                }
            }
            request(error, (_a = this.cursor) !== null && _a !== void 0 ? _a : undefined);
        }
    }
}
exports.ChangeStream = ChangeStream;
/** @event */
ChangeStream.RESPONSE = constants_1.RESPONSE;
/** @event */
ChangeStream.MORE = constants_1.MORE;
/** @event */
ChangeStream.INIT = constants_1.INIT;
/** @event */
ChangeStream.CLOSE = constants_1.CLOSE;
/**
 * Fired for each new matching change in the specified namespace. Attaching a `change`
 * event listener to a Change Stream will switch the stream into flowing mode. Data will
 * then be passed as soon as it is available.
 * @event
 */
ChangeStream.CHANGE = constants_1.CHANGE;
/** @event */
ChangeStream.END = constants_1.END;
/** @event */
ChangeStream.ERROR = constants_1.ERROR;
/**
 * Emitted each time the change stream stores a new resume token.
 * @event
 */
ChangeStream.RESUME_TOKEN_CHANGED = constants_1.RESUME_TOKEN_CHANGED;
/** @internal */
class ChangeStreamCursor extends abstract_cursor_1.AbstractCursor {
    constructor(client, namespace, pipeline = [], options = {}) {
        super(client, namespace, options);
        this.pipeline = pipeline;
        this.options = options;
        this._resumeToken = null;
        this.startAtOperationTime = options.startAtOperationTime;
        if (options.startAfter) {
            this.resumeToken = options.startAfter;
        }
        else if (options.resumeAfter) {
            this.resumeToken = options.resumeAfter;
        }
    }
    set resumeToken(token) {
        this._resumeToken = token;
        this.emit(ChangeStream.RESUME_TOKEN_CHANGED, token);
    }
    get resumeToken() {
        return this._resumeToken;
    }
    get resumeOptions() {
        const options = {
            ...this.options
        };
        for (const key of ['resumeAfter', 'startAfter', 'startAtOperationTime']) {
            delete options[key];
        }
        if (this.resumeToken != null) {
            if (this.options.startAfter && !this.hasReceived) {
                options.startAfter = this.resumeToken;
            }
            else {
                options.resumeAfter = this.resumeToken;
            }
        }
        else if (this.startAtOperationTime != null && (0, utils_1.maxWireVersion)(this.server) >= 7) {
            options.startAtOperationTime = this.startAtOperationTime;
        }
        return options;
    }
    cacheResumeToken(resumeToken) {
        if (this.bufferedCount() === 0 && this.postBatchResumeToken) {
            this.resumeToken = this.postBatchResumeToken;
        }
        else {
            this.resumeToken = resumeToken;
        }
        this.hasReceived = true;
    }
    _processBatch(response) {
        const cursor = response.cursor;
        if (cursor.postBatchResumeToken) {
            this.postBatchResumeToken = response.cursor.postBatchResumeToken;
            const batch = 'firstBatch' in response.cursor ? response.cursor.firstBatch : response.cursor.nextBatch;
            if (batch.length === 0) {
                this.resumeToken = cursor.postBatchResumeToken;
            }
        }
    }
    clone() {
        return new ChangeStreamCursor(this.client, this.namespace, this.pipeline, {
            ...this.cursorOptions
        });
    }
    _initialize(session, callback) {
        const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this.pipeline, {
            ...this.cursorOptions,
            ...this.options,
            session
        });
        (0, execute_operation_1.executeOperation)(session.client, aggregateOperation, (err, response) => {
            if (err || response == null) {
                return callback(err);
            }
            const server = aggregateOperation.server;
            if (this.startAtOperationTime == null &&
                this.resumeAfter == null &&
                this.startAfter == null &&
                (0, utils_1.maxWireVersion)(server) >= 7) {
                this.startAtOperationTime = response.operationTime;
            }
            this._processBatch(response);
            this.emit(ChangeStream.INIT, response);
            this.emit(ChangeStream.RESPONSE);
            // TODO: NODE-2882
            callback(undefined, { server, session, response });
        });
    }
    _getMore(batchSize, callback) {
        super._getMore(batchSize, (err, response) => {
            if (err) {
                return callback(err);
            }
            this._processBatch(response);
            this.emit(ChangeStream.MORE, response);
            this.emit(ChangeStream.RESPONSE);
            callback(err, response);
        });
    }
}
exports.ChangeStreamCursor = ChangeStreamCursor;
//# sourceMappingURL=change_stream.js.map