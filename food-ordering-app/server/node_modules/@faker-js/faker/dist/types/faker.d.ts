import type { LocaleDefinition } from './definitions';
import type { KnownLocale } from './locales';
import { Address } from './modules/address';
import { Animal } from './modules/animal';
import { Color } from './modules/color';
import { Commerce } from './modules/commerce';
import { Company } from './modules/company';
import { Database } from './modules/database';
import { Datatype } from './modules/datatype';
import { _Date } from './modules/date';
import { Fake } from './modules/fake';
import { Finance } from './modules/finance';
import { Git } from './modules/git';
import { Hacker } from './modules/hacker';
import { Helpers } from './modules/helpers';
import { Image } from './modules/image';
import { Internet } from './modules/internet';
import { Lorem } from './modules/lorem';
import { Mersenne } from './modules/mersenne';
import { Music } from './modules/music';
import { Name } from './modules/name';
import { Phone } from './modules/phone';
import { Random } from './modules/random';
import { Science } from './modules/science';
import { System } from './modules/system';
import { Unique } from './modules/unique';
import { Vehicle } from './modules/vehicle';
import { Word } from './modules/word';
import type { LiteralUnion } from './utils/types';
export declare type UsableLocale = LiteralUnion<KnownLocale>;
export declare type UsedLocales = Partial<Record<UsableLocale, LocaleDefinition>>;
export interface FakerOptions {
    locales: UsedLocales;
    locale?: UsableLocale;
    localeFallback?: UsableLocale;
}
export declare class Faker {
    locales: UsedLocales;
    private _locale;
    private _localeFallback;
    get locale(): UsableLocale;
    set locale(locale: UsableLocale);
    get localeFallback(): UsableLocale;
    set localeFallback(localeFallback: UsableLocale);
    readonly definitions: LocaleDefinition;
    readonly fake: Fake['fake'];
    readonly unique: Unique['unique'];
    readonly mersenne: Mersenne;
    readonly random: Random;
    readonly helpers: Helpers;
    readonly datatype: Datatype;
    readonly address: Address;
    readonly animal: Animal;
    readonly color: Color;
    readonly commerce: Commerce;
    readonly company: Company;
    readonly database: Database;
    readonly date: _Date;
    readonly finance: Finance;
    readonly git: Git;
    readonly hacker: Hacker;
    readonly image: Image;
    readonly internet: Internet;
    readonly lorem: Lorem;
    readonly music: Music;
    readonly name: Name;
    readonly phone: Phone;
    readonly science: Science;
    readonly system: System;
    readonly vehicle: Vehicle;
    readonly word: Word;
    constructor(opts: FakerOptions);
    /**
     * Creates a Proxy based LocaleDefinition that virtually merges the locales.
     */
    private initDefinitions;
    /**
     * Sets the seed or generates a new one.
     *
     * Please note that generated values are dependent on both the seed and the
     * number of calls that have been made since it was set.
     *
     * This method is intended to allow for consistent values in a tests, so you
     * might want to use hardcoded values as the seed.
     *
     * In addition to that it can be used for creating truly random tests
     * (by passing no arguments), that still can be reproduced if needed,
     * by logging the result and explicitly setting it if needed.
     *
     * @param seed The seed to use. Defaults to a random number.
     * @returns The seed that was set.
     *
     * @example
     * // Consistent values for tests:
     * faker.seed(42)
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * faker.seed(42)
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * @example
     * // Random but reproducible tests:
     * // Simply log the seed, and if you need to reproduce it, insert the seed here
     * console.log('Running test with seed:', faker.seed());
     */
    seed(seed?: number): number;
    /**
     * Sets the seed array.
     *
     * Please note that generated values are dependent on both the seed and the
     * number of calls that have been made since it was set.
     *
     * This method is intended to allow for consistent values in a tests, so you
     * might want to use hardcoded values as the seed.
     *
     * In addition to that it can be used for creating truly random tests
     * (by passing no arguments), that still can be reproduced if needed,
     * by logging the result and explicitly setting it if needed.
     *
     * @param seedArray The seed array to use.
     * @returns The seed array that was set.
     *
     * @example
     * // Consistent values for tests:
     * faker.seed([42, 13, 17])
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * faker.seed([42, 13, 17])
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * @example
     * // Random but reproducible tests:
     * // Simply log the seed, and if you need to reproduce it, insert the seed here
     * console.log('Running test with seed:', faker.seed());
     */
    seed(seedArray: number[]): number[];
    /**
     * Set Faker's locale
     *
     * @param locale The locale to set (e.g. `en` or `en_AU`, `en_AU_ocker`).
     */
    setLocale(locale: UsableLocale): void;
}
