import { BaseBuilder } from "../Builder/BaseBuilder";

export class CommonDirector {
    constructCommonHouse(builder: BaseBuilder): void {
        builder.setHouseType("COMMON");
        builder.setNumberOfDoors(6);
        builder.setNumberOfRooms(4);
        builder.setRooftopPresent(true);
        builder.setWallMaterial("STONE");
    }
    
    constructIglooHouse(builder: BaseBuilder): void {
        builder.setHouseType("IGLOO");
        builder.setNumberOfDoors(1);
        builder.setWallMaterial("ICE");
    }
}