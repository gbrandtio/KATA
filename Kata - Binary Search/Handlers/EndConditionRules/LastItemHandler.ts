export class LastItemHandler implements BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    isEndCondition: boolean = true;

    setNext(nextHandler: BaseEndConditionHandler): void {
        this.nextHandler = nextHandler;
    }

    public handle(sortedArray: number[], itemToSearch: number): boolean {
        let handled: boolean = false;

        if (sortedArray.length == 1) {
            handled = sortedArray[0] === itemToSearch;
        }

        return handled;
    }
}