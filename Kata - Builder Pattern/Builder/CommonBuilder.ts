import { CommonHouse } from "../HouseModel/CommonHouse";
import { BaseBuilder } from "./BaseBuilder";

export class CommonBuilder implements BaseBuilder {
    private commonHouse: CommonHouse;

    setNumberOfRooms(numberOfRooms: number): void {
        this.commonHouse.numberOfRooms = numberOfRooms;
    }

    setWallMaterial(wallMaterial: string): void {
        this.commonHouse.wallMaterial = wallMaterial;
    }

    setNumberOfDoors(numberOfDoors: number): void {
        this.commonHouse.numberOfDoors = numberOfDoors;
    }

    setRooftopPresent(hasRooftop: boolean): void {
        this.commonHouse.hasRooftop = hasRooftop;
    }

    setHouseType(houseType: string): void {
        this.commonHouse.houseType = houseType;
    }

    reset(): void {
        this.commonHouse = {} as CommonHouse;
    }

    constructor() {
        this.commonHouse = {} as CommonHouse;
    }

    /**
     * Every builder can return entirely different objects.
     * Thus, the retrieval method should be defined inside every builder
     * and can't be defined in the base class.
     */
    public getCommonHouse(): CommonHouse {
        const commonHouseResult: CommonHouse = this.commonHouse;
        this.reset();
        return commonHouseResult;
    }
}