/**
 * Defines a business rule that returns the left or right half of the array for the binary search algorithm.
 * @implements {BaseBinarySearchHandler}
 */
export class WhichHalfHandler implements BaseBinarySearchHandler {
    nextHandler: BaseBinarySearchHandler;
    isEndCondition: boolean = false;

    setNext(nextHandler: BaseBinarySearchHandler): void {
        this.nextHandler = nextHandler;
    }

    /**
     * Determines and returns the left or right half of the array - if the item to search is greater than the middle item of the passed
     * array, then returns the right half. Otherwise returns the left half.
     * 
     * @param sortedArray The array extract the middle item from.
     * @param itemToSearch The item to compare to the array's middle item.
     * @returns The left or right half of the array, based on the comparison of the @see itemToSearch and the middle item of the @see sortedArray array.
     */
    handle(sortedArray: number[], itemToSearch: number): number[] {
        console.log("Invoked WhichHalfHandler");

        let isItemOnSecondHalfOfTheArray: boolean = false;
        let middleItemIndex: number = Math.floor((sortedArray.length + 1) / 2);
        console.log("middle item index: " + middleItemIndex);

        if (itemToSearch > sortedArray[middleItemIndex]) {
            console.log("second half of array");
            return sortedArray.slice(middleItemIndex, sortedArray.length);
        }
        else if (itemToSearch < sortedArray[middleItemIndex]) {
            sortedArray = sortedArray.slice(0, middleItemIndex);
            console.log("first half sliced: " + JSON.stringify(sortedArray));
        }
        else {
            sortedArray = [];
            sortedArray.push(itemToSearch);
        }

        return [];
    }
}