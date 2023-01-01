import { LeagueDataDto } from "../Models/LeagueDataDto";
import { BaseOps } from "./BaseOps";

/**
 * Defines data operations for the league table.
 * @extends BaseOps
 */
export class LeagueTableOps extends BaseOps {
    /**
     * Calculates and pretty prints the details of the team with the minimum goals spread.
     * 
     * @param leagueData The data for the calculations.
     * @returns The object with the minimum goals spread.
     */
    public prettyPrintTeamWithMinimumSpread(leagueData: LeagueDataDto[]): LeagueDataDto {
        let teamWithMinimumSpread: LeagueDataDto = new LeagueDataDto();
        teamWithMinimumSpread = this.fetchObjectWithMinimumSpread(leagueData);

        console.log("Team: " + teamWithMinimumSpread.identifier + " Goals scored: " + teamWithMinimumSpread.max + " Goals conceded: " + teamWithMinimumSpread.min);
        return teamWithMinimumSpread;
    }
}