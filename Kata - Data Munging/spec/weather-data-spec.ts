import { WeatherDataDto } from "../Models/WeatherDataDto";
import { BaseOps } from "../Services/BaseOps";
import { WeatherOps } from "../Services/WeatherOps";

describe("Test suite for weather data", function () {
    let weatherOps: WeatherOps = new WeatherOps();
    let weatherDataList: WeatherDataDto[] = weatherOps.readData("./Files/weather.dat", BaseOps.MAXIMUM_TEMPERATURE_INDEX, BaseOps.MINIMUM_TEMPERATURE_INDEX);

    it("fails in case the weather data could not be read or parsed", function () {
        if (weatherDataList.length == 0 || weatherDataList == null) {
            fail("Weather data must be read properly.");
        }
    });

    it("fails if the calculated spread is less than 0", function () {
        let minimumSpread: number = weatherOps.calculateMinSpread(weatherDataList);
        expect(minimumSpread).toBeGreaterThanOrEqual(0);
    });

    it("fails if the calculated spread is equal to the maixmum safe integer", function () {
        let minimumSpread: number = weatherOps.calculateMinSpread(weatherDataList);
        expect(minimumSpread).toBeLessThan(Number.MAX_SAFE_INTEGER);
    });
});