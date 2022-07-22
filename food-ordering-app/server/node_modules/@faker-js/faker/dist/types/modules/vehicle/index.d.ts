import type { Faker } from '../..';
/**
 * Module to generate vehicle related entries.
 */
export declare class Vehicle {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random vehicle.
     *
     * @example
     * faker.vehicle.vehicle() // 'BMW Explorer'
     */
    vehicle(): string;
    /**
     * Returns a manufacturer name.
     *
     * @example
     * faker.vehicle.manufacturer() // 'Ford'
     */
    manufacturer(): string;
    /**
     * Returns a vehicle model.
     *
     * @example
     * faker.vehicle.model() // 'Explorer'
     */
    model(): string;
    /**
     * Returns a vehicle type.
     *
     * @example
     * faker.vehicle.type() // 'Coupe'
     */
    type(): string;
    /**
     * Returns a fuel type.
     *
     * @example
     * faker.vehicle.fuel() // 'Electric'
     */
    fuel(): string;
    /**
     * Returns a vehicle identification number (VIN).
     *
     * @example
     * faker.vehicle.vin() // 'YV1MH682762184654'
     */
    vin(): string;
    /**
     * Returns a vehicle color.
     *
     * @example
     * faker.vehicle.color() // 'red'
     */
    color(): string;
    /**
     * Returns a vehicle registration number (Vehicle Registration Mark - VRM)
     *
     * @example
     * faker.vehicle.vrm() // 'MF56UPA'
     */
    vrm(): string;
    /**
     * Returns a type of bicycle.
     *
     * @example
     * faker.vehicle.bicycle() // 'Adventure Road Bicycle'
     */
    bicycle(): string;
}
