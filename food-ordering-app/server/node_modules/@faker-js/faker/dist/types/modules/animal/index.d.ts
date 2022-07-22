import type { Faker } from '../..';
/**
 * Module to generate animal related entries.
 */
export declare class Animal {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random dog breed.
     *
     * @example
     * faker.animal.dog() // 'Irish Water Spaniel'
     */
    dog(): string;
    /**
     * Returns a random cat breed.
     *
     * @example
     * faker.animal.cat() // 'Singapura'
     */
    cat(): string;
    /**
     * Returns a random snake species.
     *
     * @example
     * faker.animal.snake() // 'Eyelash viper'
     */
    snake(): string;
    /**
     * Returns a random bear species.
     *
     * @example
     * faker.animal.bear() // 'Asian black bear'
     */
    bear(): string;
    /**
     * Returns a random lion species.
     *
     * @example
     * faker.animal.lion() // 'Northeast Congo Lion'
     */
    lion(): string;
    /**
     * Returns a random cetacean species.
     *
     * @example
     * faker.animal.cetacean() // 'Spinner Dolphin'
     */
    cetacean(): string;
    /**
     * Returns a random horse breed.
     *
     * @example
     * faker.animal.horse() // 'Swedish Warmblood'
     */
    horse(): string;
    /**
     * Returns a random bird species.
     *
     * @example
     * faker.animal.bird() // 'Buller's Shearwater'
     */
    bird(): string;
    /**
     * Returns a random cow species.
     *
     * @example
     * faker.animal.cow() // 'Brava'
     */
    cow(): string;
    /**
     * Returns a random fish species.
     *
     * @example
     * faker.animal.fish() // 'Mandarin fish'
     */
    fish(): string;
    /**
     * Returns a random crocodilian species.
     *
     * @example
     * faker.animal.crocodilia() // 'Philippine Crocodile'
     */
    crocodilia(): string;
    /**
     * Returns a random insect species.
     *
     * @example
     * faker.animal.insect() // 'Pyramid ant'
     */
    insect(): string;
    /**
     * Returns a random rabbit species.
     *
     * @example
     * faker.animal.rabbit() // 'Florida White'
     */
    rabbit(): string;
    /**
     * Returns a random animal type.
     *
     * @example
     * faker.animal.type() // 'crocodilia'
     */
    type(): string;
}
