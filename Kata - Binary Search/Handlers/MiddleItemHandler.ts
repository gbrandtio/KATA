
export class MiddleItemHandler implements Handler {
    nextHandler: Handler;
    isEndCondition: boolean = true;

    setNext(nextHandler: Handler): void {
        this.nextHandler = nextHandler;
    }

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