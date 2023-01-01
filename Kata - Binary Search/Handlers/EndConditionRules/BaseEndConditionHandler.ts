/**
 * Describes an interface for the end conditions of binary search algorithm.
 */
interface BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    setNext(nextHandler: BaseEndConditionHandler): void;
    handle(sortedArray: number[], itemToSearch: number): boolean;
}