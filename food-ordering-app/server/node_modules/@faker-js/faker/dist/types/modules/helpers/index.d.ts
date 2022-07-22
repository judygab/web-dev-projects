import type { Faker } from '../..';
/**
 * Module with various helper methods that transform the method input rather than returning values from locales.
 * The transformation process may call methods that use the locale data.
 */
export declare class Helpers {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Slugifies the given string.
     * For that all spaces (` `) are replaced by hyphens (`-`)
     * and most non word characters except for dots and hyphens will be removed.
     *
     * @param string The input to slugify.
     *
     * @example
     * faker.helpers.slugify() // ''
     * faker.helpers.slugify("Hello world!") // 'Hello-world'
     */
    slugify(string?: string): string;
    /**
     * Parses the given string symbol by symbol and replaces the placeholders with digits (`0` - `9`).
     * `!` will be replaced by digits >=2 (`2` - `9`).
     *
     * @param string The template string to parse.
     * @param symbol The symbol to replace with digits. Defaults to `'#'`.
     *
     * @example
     * faker.helpers.replaceSymbolWithNumber() // ''
     * faker.helpers.replaceSymbolWithNumber('#####') // '04812'
     * faker.helpers.replaceSymbolWithNumber('!####') // '27378'
     * faker.helpers.replaceSymbolWithNumber('Your pin is: !####') // '29841'
     */
    replaceSymbolWithNumber(string?: string, symbol?: string): string;
    /**
     * Parses the given string symbol by symbols and replaces the placeholder appropriately.
     *
     * - `#` will be replaced with a digit (`0` - `9`).
     * - `?` will be replaced with an upper letter ('A' - 'Z')
     * - and `*` will be replaced with either a digit or letter.
     *
     * @param string The template string to parse.
     *
     * @example
     * faker.helpers.replaceSymbols() // ''
     * faker.helpers.replaceSymbols('#####') // '98441'
     * faker.helpers.replaceSymbols('?????') // 'ZYRQQ'
     * faker.helpers.replaceSymbols('*****') // '4Z3P7'
     * faker.helpers.replaceSymbols('Your pin is: #?*#?*') // '0T85L1'
     */
    replaceSymbols(string?: string): string;
    /**
     * Replaces the symbols and patterns in a credit card schema including Luhn checksum.
     *
     * This method supports both range patterns `[4-9]` as well as the patterns used by `replaceSymbolWithNumber()`.
     * `L` will be replaced with the appropriate Luhn checksum.
     *
     * @param string The credit card format pattern. Defaults to `6453-####-####-####-###L`.
     * @param symbol The symbol to replace with a digit.
     *
     * @example
     * faker.helpers.replaceCreditCardSymbols() // '6453-4876-8626-8995-3771'
     * faker.helpers.replaceCreditCardSymbols('1234-[4-9]-##!!-L') // '1234-9-5298-2'
     */
    replaceCreditCardSymbols(string?: string, symbol?: string): string;
    /**
     * Repeats the given string the given number of times.
     *
     * @param string The string to repeat. Defaults to `''`.
     * @param num The number of times to repeat it. Defaults to `0`.
     *
     * @example
     * faker.helpers.repeatString('Hello world! ') // ''
     * faker.helpers.repeatString('Hello world! ', 1) // 'Hello world! '
     * faker.helpers.repeatString('Hello world! ', 2) // 'Hello world! Hello world! '
     */
    repeatString(string?: string, num?: number): string;
    /**
     * Replaces the regex like expressions in the given string with matching values.
     *
     * Supported patterns:
     * - `.{times}` => Repeat the character exactly `times` times.
     * - `.{min,max}` => Repeat the character `min` to `max` times.
     * - `[min-max]` => Generate a number between min and max (inclusive).
     *
     * @param string The template string to to parse.
     *
     * @example
     * faker.helpers.regexpStyleStringParse() // ''
     * faker.helpers.regexpStyleStringParse('#{5}') // '#####'
     * faker.helpers.regexpStyleStringParse('#{2,9}') // '#######'
     * faker.helpers.regexpStyleStringParse('[500-15000]') // '8375'
     * faker.helpers.regexpStyleStringParse('#{3}test[1-5]') // '###test3'
     */
    regexpStyleStringParse(string?: string): string;
    /**
     * Takes an array and randomizes it in place then returns it.
     *
     * Uses the modern version of the Fisher–Yates algorithm.
     *
     * @template T The type of the entries to shuffle.
     * @param o The array to shuffle. Defaults to `[]`.
     *
     * @example
     * faker.helpers.shuffle() // []
     * faker.helpers.shuffle(['a', 'b', 'c']) // [ 'b', 'c', 'a' ]
     */
    shuffle<T>(o?: T[]): T[];
    /**
     * Takes an array of strings or function that returns a string
     * and outputs a unique array of strings based on that source.
     * This method does not store the unique state between invocations.
     *
     * @template T The type of the entries.
     * @param source The strings to choose from or a function that generates a string.
     * @param length The number of elements to generate.
     *
     * @example
     * faker.helpers.uniqueArray(faker.random.word, 50)
     * faker.helpers.uniqueArray(faker.definitions.name.first_name, 6)
     * faker.helpers.uniqueArray(["Hello", "World", "Goodbye"], 2)
     */
    uniqueArray<T>(source: readonly T[] | (() => T), length: number): T[];
    /**
     * Replaces the `{{placeholder}}` patterns in the given string mustache style.
     *
     * @param str The template string to parse.
     * @param data The data used to populate the placeholders.
     * This is a record where the key is the template placeholder,
     * whereas the value is either a string or a function suitable for `String.replace()`.
     *
     * @example
     * faker.helpers.mustache('I found {{count}} instances of "{{word}}".', {
     *   count: () => `${faker.datatype.number()}`,
     *   word: "this word",
     * }) // 'I found 57591 instances of "this word".'
     */
    mustache(str: string | undefined, data: Record<string, string | Parameters<string['replace']>[1]>): string;
    /**
     * Returns the result of the callback if the probability check was successful, otherwise `undefined`.
     *
     * @template T The type of result of the given callback.
     * @param callback The callback to that will be invoked if the probability check was successful.
     * @param options The options to use. Defaults to `{}`.
     * @param options.probability The probability (`[0.00, 1.00]`) of the callback being invoked. Defaults to `0.5`.
     *
     * @example
     * faker.helpers.maybe(() => 'Hello World!') // 'Hello World!'
     * faker.helpers.maybe(() => 'Hello World!', { probability: 0.1 }) // undefined
     * faker.helpers.maybe(() => 'Hello World!', { probability: 0.9 }) // 'Hello World!'
     */
    maybe<T>(callback: () => T, options?: {
        probability?: number;
    }): T | undefined;
    /**
     * Returns a random key from given object or `undefined` if no key could be found.
     *
     * @param object The object to be used.
     *
     * @example
     * faker.helpers.objectKey({ myProperty: 'myValue' }) // 'myProperty'
     */
    objectKey<T extends Record<string, unknown>>(object: T): keyof T;
    /**
     * Returns a random value from given object or `undefined` if no key could be found.
     *
     * @param object The object to be used.
     *
     * @example
     * faker.helpers.objectValue({ myProperty: 'myValue' }) // 'myValue'
     */
    objectValue<T extends Record<string, unknown>>(object: T): T[keyof T];
    /**
     * Returns random element from the given array.
     *
     * @template T The type of the entries to pick from.
     * @param array Array to pick the value from.
     *
     * @example
     * faker.helpers.arrayElement(['cat', 'dog', 'mouse']) // 'dog'
     */
    arrayElement<T = string>(array?: ReadonlyArray<T>): T;
    /**
     * Returns a subset with random elements of the given array in random order.
     *
     * @template T The type of the entries to pick from.
     * @param array Array to pick the value from.
     * @param count Number of elements to pick.
     *    When not provided, random number of elements will be picked.
     *    When value exceeds array boundaries, it will be limited to stay inside.
     *
     * @example
     * faker.helpers.arrayElements(['cat', 'dog', 'mouse']) // ['mouse', 'cat']
     * faker.helpers.arrayElements([1, 2, 3, 4, 5], 2) // [4, 2]
     */
    arrayElements<T>(array?: ReadonlyArray<T>, count?: number): T[];
}
