/**
 * The Builder classes are responsible for providing the business rules
 * for creating the parts of a complex object. The base interface of the
 * Builders makes it easy to change builders at runtime and depend less on
 * the details of each concrete Builder.
 */
export abstract class BaseBuilder {
    abstract setNumberOfRooms(numberOfRooms: number): void;
    abstract setWallMaterial(wallMaterial: string): void;
    abstract setNumberOfDoors(numberOfDoors: number): void;
    abstract setRooftopPresent(hasRooftop: boolean): void;
    abstract setHouseType(houseType: string): void; 
    abstract reset(): void;
}