export class EmptyArrayHandler implements Handler {
    nextHandler: Handler;
    isEndCondition: boolean = true;

    setNext(nextHandler: Handler): void {
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