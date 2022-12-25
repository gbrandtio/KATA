import { FileService } from "../Services/FileService";

describe("Test suite for array sanitization", function () {
    let fileService: FileService = new FileService();

    it("returns an empty array if the passed array contains only whitespace strings", function () {
        let whitespaceStringsArray: string[] = ["", " ", "   ", "       ", "        "];
        let itHasElements: boolean = whitespaceStringsArray.length > 0;
        expect(itHasElements).toBe(true);

        let sanitizedArray = fileService.sanitizeArray(whitespaceStringsArray);
        let isEmpty: boolean = sanitizedArray.length === 0;
        expect(isEmpty).toBe(true);
    });
});