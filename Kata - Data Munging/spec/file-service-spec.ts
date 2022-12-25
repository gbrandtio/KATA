import { FileService } from "../Services/FileService";

describe("Test suite for array sanitization", function () {
    let fileService: FileService = new FileService();
    let rawData: string[] = fileService.readData("./Files/weather.dat");

    it("fails if reading fails", function () {
        let isDataArrayEmpty = rawData.length === 0;
        expect(isDataArrayEmpty).toBe(false);
    });

    it("returns an array without whitespaces", function () {
        let dataMap: Map<number, string[]> = fileService.splitLinesBasedOnWhitespaces(rawData);
        let isMapEmpty: boolean = dataMap.size === 0;

        expect(isMapEmpty).toBe(false);
    });
});