import type { Faker } from '../..';
export declare enum Gender {
    female = "female",
    male = "male"
}
export declare type GenderType = 'female' | 'male';
/**
 * Module to generate people's names and titles.
 */
export declare class Name {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random first name.
     *
     * @param gender The optional gender to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.firstName() // 'Antwan'
     * faker.name.firstName("female") // 'Victoria'
     * faker.name.firstName("male") // 'Tom'
     */
    firstName(gender?: GenderType): string;
    /**
     * Returns a random last name.
     *
     * @param gender The optional gender to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.lastName() // 'Hauck'
     * faker.name.lastName("female") // 'Grady'
     * faker.name.lastName("male") // 'Barton'
     */
    lastName(gender?: GenderType): string;
    /**
     * Returns a random middle name.
     *
     * @param gender The optional gender to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.middleName() // 'Доброславівна'
     * faker.name.middleName("female") // 'Анастасівна'
     * faker.name.middleName("male") // 'Вікторович'
     */
    middleName(gender?: GenderType): string;
    /**
     * Generates a random full name.
     *
     * @param firstName The optional first name to use. If not specified a random one will be chosen.
     * @param lastName The optional last name to use. If not specified a random one will be chosen.
     * @param gender The optional gender to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.findName() // 'Allen Brown'
     * faker.name.findName('Joann') // 'Joann Osinski'
     * faker.name.findName('Marcella', '', 'female') // 'Mrs. Marcella Huels'
     * faker.name.findName(undefined, 'Beer') // 'Mr. Alfonso Beer'
     * faker.name.findName(undefined, undefined, 'male') // 'Fernando Schaefer'
     */
    findName(firstName?: string, lastName?: string, gender?: GenderType): string;
    /**
     * Return a random gender.
     *
     * @param binary Whether to return only binary gender names. Defaults to `false`.
     *
     * @example
     * faker.name.gender() // 'Trans*Man'
     * faker.name.gender(true) // 'Female'
     */
    gender(binary?: boolean): string;
    /**
     * Returns a random name prefix.
     *
     * @param gender The optional gender to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.prefix() // 'Miss'
     * faker.name.prefix('female') // 'Ms.'
     * faker.name.prefix('male') // 'Mr.'
     */
    prefix(gender?: GenderType): string;
    /**
     * Returns a random name suffix.
     *
     * @example
     * faker.name.suffix() // 'DDS'
     */
    suffix(): string;
    /**
     * Generates a random job title.
     *
     * @example
     * faker.name.jobTitle() // 'Global Accounts Engineer'
     */
    jobTitle(): string;
    /**
     * Generates a random job descriptor.
     *
     * @example
     * faker.name.jobDescriptor() // 'Customer'
     */
    jobDescriptor(): string;
    /**
     * Generates a random job area.
     *
     * @example
     * faker.name.jobArea() // 'Brand'
     */
    jobArea(): string;
    /**
     * Generates a random job type.
     *
     * @example
     * faker.name.jobType() // 'Assistant'
     */
    jobType(): string;
}
