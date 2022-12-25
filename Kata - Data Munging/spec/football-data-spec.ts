import { LeagueDataDto } from "../Models/LeagueDataDto";
import { BaseOps } from "../Services/BaseOps";
import { FileService } from "../Services/FileService";
import { LeagueTableOps } from "../Services/LeagueTableOps";

describe("Test suite for league table data", function () {
    let leagueTableOps: LeagueTableOps = new LeagueTableOps();
    let leagueData: LeagueDataDto[] = leagueTableOps.readData("./Files/football.dat", BaseOps.GOALS_SCORED_INDEX, BaseOps.GOALS_CONCEDED_INDEX);

    it("fails in case the league table data could not be read or parsed", function () {
        if (leagueData.length == 0 || leagueData == null) {
            fail("Weather data must be read properly.");
        }
    });

    it("fails if the calculated spread is less than 0", function () {
        let minimumSpread: number = leagueTableOps.calculateMinSpread(leagueData);
        expect(minimumSpread).toBeGreaterThanOrEqual(0);
    });

    it("fails if the calculated spread is equal to the maixmum safe integer", function () {
        let minimumSpread: number = leagueTableOps.calculateMinSpread(leagueData);
        expect(minimumSpread).toBeLessThan(Number.MAX_SAFE_INTEGER);
    });

    it("returns the object that has the minimum goal spread", function () {
        let teamWithMinimumSpread: LeagueDataDto = leagueTableOps.fetchObjectWithMinimumSpread(leagueData);
        expect(teamWithMinimumSpread.calculateSpread()).toBeLessThan(Number.MAX_SAFE_INTEGER);
    });
});