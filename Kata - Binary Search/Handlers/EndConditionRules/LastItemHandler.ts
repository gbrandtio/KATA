/**
 * Defines the last item end condition for binary search algorithm.
 * @implements {BaseEndConditionHandler}
 */
export class LastItemHandler implements BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    isEndCondition: boolean = true;

    setNext(nextHandler: BaseEndConditionHandler): void {
        this.nextHandler = nextHandler;
    }

    /**
     * Checks if the passed array's length is 1 and if yes, checks if it matches the item that is searched.
     * 
     * @param sortedArray The array to check the length.
     * @param itemToSearch The item to search on the given array.
     * @returns True if the @see sortedArray contains one element which matches the @see sortedArray.
     */
    public handle(sortedArray: number[], itemToSearch: number): boolean {
        let handled: boolean = false;

        if (sortedArray.length == 1) {
            handled = sortedArray[0] === itemToSearch;
        }

        return handled;
    }
}