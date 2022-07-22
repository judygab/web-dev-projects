import type { Faker } from '../..';
/**
 * Module to generate company related entries.
 */
export declare class Company {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns an array with possible company name suffixes.
     *
     * @example
     * faker.company.suffixes() // [ 'Inc', 'and Sons', 'LLC', 'Group' ]
     */
    suffixes(): string[];
    /**
     * Generates a random company name.
     *
     * @param format The optional format index used to select a format.
     *
     * @example
     * faker.company.companyName() // 'Zieme, Hauck and McClure'
     */
    companyName(format?: number): string;
    /**
     * Returns a random company suffix.
     *
     * @example
     * faker.company.companySuffix() // 'and Sons'
     */
    companySuffix(): string;
    /**
     * Generates a random business catch phrase.
     *
     * @example
     * faker.company.catchPhrase() // 'Upgradable systematic flexibility'
     */
    catchPhrase(): string;
    /**
     * Generates a random company bs phrase.
     *
     * @example
     * faker.company.bs() // 'cultivate synergistic e-markets'
     */
    bs(): string;
    /**
     * Returns a random catch phrase adjective.
     *
     * @example
     * faker.company.catchPhraseAdjective() // 'Multi-tiered'
     */
    catchPhraseAdjective(): string;
    /**
     * Returns a random catch phrase descriptor.
     *
     * @example
     * faker.company.catchPhraseDescriptor() // 'composite'
     */
    catchPhraseDescriptor(): string;
    /**
     * Returns a random catch phrase noun.
     *
     * @example
     * faker.company.catchPhraseNoun() // 'leverage'
     */
    catchPhraseNoun(): string;
    /**
     * Returns a random company bs adjective.
     *
     * @example
     * faker.company.bsAdjective() // 'one-to-one'
     */
    bsAdjective(): string;
    /**
     * Returns a random company bs buzz word.
     *
     * @example
     * faker.company.bsBuzz() // 'empower'
     */
    bsBuzz(): string;
    /**
     * Returns a random company bs noun.
     *
     * @example
     * faker.company.bsNoun() // 'paradigms'
     */
    bsNoun(): string;
}
