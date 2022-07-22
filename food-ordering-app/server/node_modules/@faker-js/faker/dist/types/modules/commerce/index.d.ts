import type { Faker } from '../../faker';
/**
 * Module to generate commerce and product related entries.
 */
export declare class Commerce {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a human readable color name.
     *
     * @example
     * faker.commerce.color() // 'red'
     *
     * @deprecated
     * Use `faker.color.human()` instead.
     */
    color(): string;
    /**
     * Returns a department inside a shop.
     *
     * @example
     * faker.commerce.department() // 'Garden'
     */
    department(): string;
    /**
     * Generates a random descriptive product name.
     *
     * @example
     * faker.commerce.productName() // 'Incredible Soft Gloves'
     */
    productName(): string;
    /**
     * Generates a price between min and max (inclusive).
     *
     * @param min The minimum price. Defaults to `1`.
     * @param max The maximum price. Defaults to `1000`.
     * @param dec The number of decimal places. Defaults to `2`.
     * @param symbol The currency value to use. Defaults to `''`.
     *
     * @example
     * faker.commerce.price() // 828.00
     * faker.commerce.price(100) // 904.00
     * faker.commerce.price(100, 200) // 154.00
     * faker.commerce.price(100, 200, 0) // 133
     * faker.commerce.price(100, 200, 0, '$') // $114
     */
    price(min?: number, max?: number, dec?: number, symbol?: string): string;
    /**
     * Returns an adjective describing a product.
     *
     * @example
     * faker.commerce.productAdjective() // 'Handcrafted'
     */
    productAdjective(): string;
    /**
     * Returns a material of a product.
     *
     * @example
     * faker.commerce.productMaterial() // 'Rubber'
     */
    productMaterial(): string;
    /**
     * Returns a short product name.
     *
     * @example
     * faker.commerce.product() // 'Computer'
     */
    product(): string;
    /**
     * Returns a product description.
     *
     * @example
     * faker.commerce.productDescription() // 'Andy shoes are designed to keeping...'
     */
    productDescription(): string;
}
