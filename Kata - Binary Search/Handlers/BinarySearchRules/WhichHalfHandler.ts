export class WhichHalfHandler implements BaseBinarySearchHandler {
    nextHandler: BaseBinarySearchHandler;
    isEndCondition: boolean = false;

    setNext(nextHandler: BaseBinarySearchHandler): void {
        this.nextHandler = nextHandler;
    }

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