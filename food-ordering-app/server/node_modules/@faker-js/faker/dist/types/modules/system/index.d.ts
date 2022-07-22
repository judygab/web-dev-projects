import type { Faker } from '../..';
/**
 * Generates fake data for many computer systems properties.
 */
export declare class System {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random file name with extension.
     *
     * @example
     * faker.system.fileName() // 'self_enabling_accountability_toys.kpt'
     */
    fileName(): string;
    /**
     * Returns a random file name with a given extension or a commonly used extension.
     *
     * @param ext Extension. Empty string is considered to be not set.
     * @example
     * faker.system.commonFileName() // 'dollar.jpg'
     * faker.system.commonFileName('txt') // 'global_borders_wyoming.txt'
     */
    commonFileName(ext?: string): string;
    /**
     * Returns a mime-type.
     *
     * @example
     * faker.system.mimeType() // 'video/vnd.vivo'
     */
    mimeType(): string;
    /**
     * Returns a commonly used file type.
     *
     * @example
     * faker.system.commonFileType() // 'audio'
     */
    commonFileType(): string;
    /**
     * Returns a commonly used file extension.
     *
     * @example
     * faker.system.commonFileExt() // 'gif'
     */
    commonFileExt(): string;
    /**
     * Returns a file type.
     *
     * @example
     * faker.system.fileType() // 'message'
     */
    fileType(): string;
    /**
     * Returns a file extension.
     *
     * @param mimeType Valid [mime-type](https://github.com/jshttp/mime-db/blob/master/db.json)
     *
     * @example
     * faker.system.fileExt() // 'emf'
     * faker.system.fileExt('application/json') // 'json'
     */
    fileExt(mimeType?: string): string;
    /**
     * Returns a directory path.
     *
     * @example
     * faker.system.directoryPath() // '/etc/mail'
     */
    directoryPath(): string;
    /**
     * Returns a file path.
     *
     * @example
     * faker.system.filePath() // '/usr/local/src/money.dotx'
     */
    filePath(): string;
    /**
     * Returns a [semantic version](https://semver.org).
     *
     * @example
     * faker.system.semver() // '1.1.2'
     */
    semver(): string;
}
