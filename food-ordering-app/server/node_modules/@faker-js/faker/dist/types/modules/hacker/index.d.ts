import type { Faker } from '../..';
/**
 * Module to generate hacker/IT words and phrases.
 */
export declare class Hacker {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random hacker/IT abbreviation.
     *
     * @example
     * faker.hacker.abbreviation() // 'THX'
     */
    abbreviation(): string;
    /**
     * Returns a random hacker/IT adjective.
     *
     * @example
     * faker.hacker.adjective() // 'cross-platform'
     */
    adjective(): string;
    /**
     * Returns a random hacker/IT noun.
     *
     * @example
     * faker.hacker.noun() // 'system'
     */
    noun(): string;
    /**
     * Returns a random hacker/IT verb.
     *
     * @example
     * faker.hacker.verb() // 'copy'
     */
    verb(): string;
    /**
     * Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).
     *
     * @example
     * faker.hacker.ingverb() // 'navigating'
     */
    ingverb(): string;
    /**
     * Generates a random hacker/IT phrase.
     *
     * @example
     * faker.hacker.phrase()
     * // 'If we override the card, we can get to the HDD feed through the back-end HDD sensor!'
     */
    phrase(): string;
}
