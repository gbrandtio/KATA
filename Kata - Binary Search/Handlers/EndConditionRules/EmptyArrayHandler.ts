export class EmptyArrayHandler implements BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    isEndCondition: boolean = true;

    setNext(nextHandler: BaseEndConditionHandler): void {
        this.nextHandler = nextHandler;
    }

    public handle(sortedArray: number[], itemToSearch: number): boolean {
        let handled: boolean = true;

        if (sortedArray.length == 0) {
            handled = false;
        }

        return handled;
    }
}