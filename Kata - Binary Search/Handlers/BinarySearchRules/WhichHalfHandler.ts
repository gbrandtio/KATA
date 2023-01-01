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
        let isItemOnSecondHalfOfTheArray: boolean = false;
        let middleItemIndex: number = sortedArray[sortedArray.length / 2];
        isItemOnSecondHalfOfTheArray = this.IsGreaterThan(itemToSearch, middleItemIndex);

        if (isItemOnSecondHalfOfTheArray) {
            return sortedArray.slice(middleItemIndex + 1, sortedArray.length)
        }

        return sortedArray.slice(0, middleItemIndex);
    }

    public IsGreaterThan(x: number, y: number): boolean {
        if (x > y) return true;
        return false;
    }
}