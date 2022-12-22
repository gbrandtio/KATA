export class WhichHalfHandler implements Handler {
    nextHandler: Handler;
    isEndCondition: boolean = false;

    setNext(nextHandler: Handler): void {
        this.nextHandler = nextHandler;
    }

    handle(sortedArray: number[], itemToSearch: number): boolean {
        let handled: boolean = false;
        let middleItem: number = sortedArray[sortedArray.length / 2];
        handled = this.IsGreaterThan(itemToSearch, middleItem);
        return handled;
    }

    public IsGreaterThan(x: number, y: number): boolean {
        if (x > y) return true;
        return false;
    }
}