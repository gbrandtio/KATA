interface Handler {
    nextHandler: Handler;
    setNext(nextHandler: Handler): void;
    handle(sortedArray: number[], itemToSearch: number): boolean;
    isEndCondition: boolean;
}