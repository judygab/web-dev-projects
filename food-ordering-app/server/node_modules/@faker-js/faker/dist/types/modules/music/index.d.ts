import type { Faker } from '../..';
/**
 * Module to generate music related entries.
 */
export declare class Music {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random music genre.
     *
     * @example
     * faker.music.genre() // 'Reggae'
     */
    genre(): string;
    /**
     * Returns a random song name.
     *
     * @example
     * faker.music.songName() // 'White Christmas'
     */
    songName(): string;
}
