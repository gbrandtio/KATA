import { CommonBuilder } from "../Builder/CommonBuilder";
import { CommonDirector } from "../Director/CommonDirector";
import { CommonHouse } from "../HouseModel/CommonHouse";

describe("The builder", function () {
    const commonBuilder = new CommonBuilder();
    let commonDirector: CommonDirector = new CommonDirector();

    beforeEach(() => {
        commonDirector = new CommonDirector();
    });

    it("creates a Common house through the director", function () {
        commonDirector.constructCommonHouse(commonBuilder);
        let commonHouse: CommonHouse = commonBuilder.getCommonHouse();

        expect(commonHouse.hasRooftop).toBe(true);
        expect(commonHouse.numberOfRooms).toBe(4);
        expect(commonHouse.numberOfDoors).toBe(6);
        expect(commonHouse.wallMaterial.toLowerCase()).toBe("stone");
    });

    it("creates an Igloo house through the director", function () {
        commonDirector.constructIglooHouse(commonBuilder);
        let commonHouse: CommonHouse = commonBuilder.getCommonHouse();

        expect(commonHouse.houseType).toBe("IGLOO");
        expect(commonHouse.numberOfDoors).toBe(1);
        expect(commonHouse.wallMaterial.toLowerCase()).toBe("ice");
    });
});