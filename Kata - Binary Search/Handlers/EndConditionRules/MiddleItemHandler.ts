/**
 * Defines the middle item end condition for binary search algorithm.
 * @implements {BaseEndConditionHandler}
 */
export class MiddleItemHandler implements BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    isEndCondition: boolean = true;

    setNext(nextHandler: BaseEndConditionHandler): void {
        this.nextHandler = nextHandler;
    }

    /**
     * Checks if the middle item of the passed array matches the passed item that is searched.
     * 
     * @param sortedArray The array to check it's middle item.
     * @param itemToSearch The item to check if matches the middle item.
     * @returns True if the middle item of the passed array matches the item to search.
     */
    handle(sortedArray: number[], itemToSearch: number): boolean {
        let handled: boolean = false;

        let middleItemIndex: number = sortedArray.length / 2;
        let middleItem: number = sortedArray[middleItemIndex];

        if (itemToSearch === middleItem) {
            handled = true;
        }

        return handled;
    }
}