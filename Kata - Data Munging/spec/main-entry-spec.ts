import { Main } from "../main";

describe("Test suite for main", function () {
    let main: Main = new Main();

    it("prints the minimum temperature spread of the given data", function () {
        main.calculateMinimumTemperatureSpread();
    });

    it("pretty prints the data of the team that had the minimum goals spread", function () {
        main.determineTeamWithMinimumGoalsSpread();
    });
});