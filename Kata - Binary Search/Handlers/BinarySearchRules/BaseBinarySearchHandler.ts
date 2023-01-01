interface BaseBinarySearchHandler {
    nextHandler: BaseBinarySearchHandler;
    setNext(nextHandler: BaseBinarySearchHandler): void;
    handle(sortedArray: number[], itemToSearch: number): number[];
}