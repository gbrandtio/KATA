import { LeagueDataDto } from "../Models/LeagueDataDto";
import { BaseOps } from "./BaseOps";

export class LeagueTableOps extends BaseOps {
    public prettyPrintTeamWithMinimumSpread(leagueData: LeagueDataDto[]): LeagueDataDto {
        let teamWithMinimumSpread: LeagueDataDto = new LeagueDataDto();
        teamWithMinimumSpread = this.fetchObjectWithMinimumSpread(leagueData);

        console.log("Team: " + teamWithMinimumSpread.identifier + " Goals scored: " + teamWithMinimumSpread.max + " Goals conceded: " + teamWithMinimumSpread.min);
        return teamWithMinimumSpread;
    }
}