export class LastItemHandler implements Handler {
    nextHandler: Handler;
    isEndCondition: boolean = true;

    setNext(nextHandler: Handler): void {
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