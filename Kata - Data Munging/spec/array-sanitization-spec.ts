import { ArraySanitizationService } from "../Services/ArraySanitizationService";

describe("Test suite for array sanitization", function () {
    let arraySanitizationService: ArraySanitizationService = new ArraySanitizationService();

    it("returns an empty array if the passed array contains only whitespace strings", function () {
        let whitespaceStringsArray: string[] = ["", " ", "   ", "       ", "        "];
        let itHasElements: boolean = whitespaceStringsArray.length > 0;
        expect(itHasElements).toBe(true);

        let sanitizedArray = arraySanitizationService.sanitize(whitespaceStringsArray);
        let isEmpty: boolean = sanitizedArray.length === 0;
        expect(isEmpty).toBe(true);
    });

    it("returns an array without whitespaces", function () {
        let arrayWithStringsAndWhitespaces: string[] = ["", "Example string 1", " ", "Example string 2", " "];
        let sanitizedArray: string[] = arraySanitizationService.sanitize(arrayWithStringsAndWhitespaces);
        let isWhitespacesRemoved: boolean = arrayWithStringsAndWhitespaces.length === sanitizedArray.length + 3;

        expect(isWhitespacesRemoved).toBe(true);
    });
});