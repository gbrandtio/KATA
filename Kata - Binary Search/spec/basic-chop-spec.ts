import { BinarySearch } from "../main";

describe("Empty array tests", function () {
    let binarySearch: BinarySearch = new BinarySearch();
    binarySearch.initializeEndConditions();
    binarySearch.initializeBinarySearchHandlers();

    let found: boolean = false;
    let numberToSearch: number;

    /** 
     * Empty array tests 
    */
    it("returns false if an empty array is provided", function () {
        let emptyArray: number[] = [];
        numberToSearch = 5;

        found = binarySearch.search(numberToSearch, emptyArray);
        expect(found).toBe(false);
    });
});

describe("Array with odd number of elements tests", function () {
    let binarySearch: BinarySearch = new BinarySearch();
    binarySearch.initializeEndConditions();
    binarySearch.initializeBinarySearchHandlers();

    let found: boolean = false;
    let numberToSearch: number;

    let arrayWithOnlyOneElement: number[] = [1];
    let arrayWithOddNumberOfElements: number[] = [1, 3, 5];

    /**
     * Array with only one element tests.
     */
    it("returns false if the passed number does not exist in the array, and the array has only one element", function () {
        numberToSearch = 7;

        found = binarySearch.search(numberToSearch, arrayWithOnlyOneElement);
        expect(found).toBe(false);
    });

    it("returns true if the passed number exists in the array, and the array has only one position", function () {
        numberToSearch = 1;

        found = binarySearch.search(numberToSearch, arrayWithOnlyOneElement);
        expect(found).toBe(true);
    });

    /** 
     * Array with odd number of elements tests (more than one).
    */


    it("returns true if the passed number exists in the array, and it is on the first position", function () {
        numberToSearch = 1;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns true if the passed number exists in the array, and it is the middle item", function () {
        numberToSearch = 3;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns true if the passed number exists in the array, and it is the last item", function () {
        numberToSearch = 5;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns false if the element does not exist in the array, and it's value is smaller by one of the first item of the array", function () {
        numberToSearch = 0;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is between the first and the second element's value", function () {
        numberToSearch = 2;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is between the second and third element's value", function () {
        numberToSearch = 4;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is greater than the last element's value", function () {
        numberToSearch = 8;

        found = binarySearch.search(numberToSearch, arrayWithOddNumberOfElements);
        expect(found).toBe(false);
    });
});

describe("Array with even number of elements tests", function () {
    let binarySearch: BinarySearch = new BinarySearch();
    binarySearch.initializeEndConditions();
    binarySearch.initializeBinarySearchHandlers();

    let found: boolean = false;
    let numberToSearch: number;

    /**
    * Array with even number of elements tests (more than 2).
    */
    let arrayWithEvenNumberOfElements: number[] = [1, 3, 5, 7];

    it("returns true if the passed number exists in the array, and it is on the first position", function () {
        numberToSearch = 1;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns true if the passed number exists in the array, and it is the middle left item", function () {
        numberToSearch = 3;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns true if the passed number exists in the array, and it is the middle right item", function () {
        numberToSearch = 5;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns true if the passed number exists in the array, and it is the last item", function () {
        numberToSearch = 7;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(true);
    });

    it("returns false if the element does not exist in the array, and it's value is smaller by one of the first item of the array", function () {
        numberToSearch = 0;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is in-between the values of the array's elements", function () {
        numberToSearch = 2;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is in-between the values of the array's elements", function () {
        numberToSearch = 4;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is in-between the values of the array's elements", function () {
        numberToSearch = 6;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(false);
    });

    it("returns false if the element does not exist in the array, and it's value is greater than the last element's value", function () {
        numberToSearch = 8;

        found = binarySearch.search(numberToSearch, arrayWithEvenNumberOfElements);
        expect(found).toBe(false);
    });
});