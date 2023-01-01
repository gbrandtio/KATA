import { BinarySearch } from "../main";

describe("Test suite for binary search", function () {
    let binarySearch: BinarySearch = new BinarySearch();
    binarySearch.initializeEndConditions();
    binarySearch.initializeBinarySearchHandlers();
    let found: boolean = false;

    it("returns false if the passed array is empty", function () {
        let emptyArray: number[] = [];
        let numberToSearch: number = 5;

        found = binarySearch.Search(numberToSearch, emptyArray);
        expect(found).toBe(false);
    });

    it("returns true if the passed number exists in the passed array", function () {
        let sortedArray: number[] = [1,2,3,4,5,6];
        let numberToSearch: number = 5;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("returns true if the middle item of the array is the one we're searching, for even-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8];
        let numberToSearch: number = 5;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("part 1 - returns true if the middle item of the array is the one we're searching, for odd-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8,9];
        let numberToSearch: number = 4;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("part 2 - returns true if the middle item of the array is the one we're searching, for odd-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8,9];
        let numberToSearch: number = 5;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("makes sure that if the number to search is on the first position of the array it will be found, for even-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8];
        let numberToSearch: number = 1;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("makes sure that if the number to search is on the last position of the array it will be found, for even-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8];
        let numberToSearch: number = 8;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("makes sure that if the number to search is on the first position of the array it will be found, for odd-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8,9];
        let numberToSearch: number = 1;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });

    it("makes sure that if the number to search is on the last position of the array it will be found, for odd-lengthed arrays", function () {
        let sortedArray: number[] = [1,2,3,4,5,6,7,8,9];
        let numberToSearch: number = 9;

        found = binarySearch.Search(numberToSearch, sortedArray);
        expect(found).toBe(true);
    });
});