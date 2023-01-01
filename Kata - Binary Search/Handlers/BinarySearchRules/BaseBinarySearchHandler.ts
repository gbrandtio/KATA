/**
 * Determines an interface to define the business rules of binary search algorithm.
 */
interface BaseBinarySearchHandler {
    nextHandler: BaseBinarySearchHandler;
    setNext(nextHandler: BaseBinarySearchHandler): void;
    handle(sortedArray: number[], itemToSearch: number): number[];
}