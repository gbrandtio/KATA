/**
 * Defines the empty array end condition for the binary search algorithm.
 * @implements {BaseEndConditionHandler}
 */
export class EmptyArrayHandler implements BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    isEndCondition: boolean = true;

    setNext(nextHandler: BaseEndConditionHandler): void {
        this.nextHandler = nextHandler;
    }

    /**
     * Checks if the passed array is an empty array.
     * 
     * @param sortedArray The array to be checked.
     * @param itemToSearch Not used on this handler.
     * @returns False if the passed array is empty.
     */
    public handle(sortedArray: number[], itemToSearch: number): boolean {
        let handled: boolean = true;

        if (sortedArray.length == 0) {
            handled = false;
        }

        return handled;
    }
}