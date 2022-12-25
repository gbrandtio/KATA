import { LeagueDataDto } from "./Models/LeagueDataDto";
import { WeatherDataDto } from "./Models/WeatherDataDto";
import { BaseOps } from "./Services/BaseOps";
import { LeagueTableOps } from "./Services/LeagueTableOps";
import { WeatherOps } from "./Services/WeatherOps";

export class Main {
    public calculateMinimumTemperatureSpread(): void {
        let weatherDataOperations: WeatherOps = new WeatherOps();
        let weatherData: WeatherDataDto[] = weatherDataOperations.readData("./Files/weather.dat", BaseOps.MAXIMUM_TEMPERATURE_INDEX, BaseOps.MINIMUM_TEMPERATURE_INDEX);
        let minimumTemperatureSpread: number = weatherDataOperations.calculateMinSpread(weatherData);

        console.log("Minimum temperature spread: " + minimumTemperatureSpread);
    }

    public determineTeamWithMinimumGoalsSpread(): void {
        let leagueTableOperations: LeagueTableOps = new LeagueTableOps();
        let leagueData: LeagueDataDto[] = leagueTableOperations.readData("./Files/football.dat", BaseOps.GOALS_SCORED_INDEX, BaseOps.GOALS_CONCEDED_INDEX);
        let minimumGoalsSpread: number = leagueTableOperations.calculateMinSpread(leagueData);

        console.log("Minimum goals spread: " + minimumGoalsSpread);
        leagueTableOperations.prettyPrintTeamWithMinimumSpread(leagueData);
    }
}