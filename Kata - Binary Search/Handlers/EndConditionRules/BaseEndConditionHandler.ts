interface BaseEndConditionHandler {
    nextHandler: BaseEndConditionHandler;
    setNext(nextHandler: BaseEndConditionHandler): void;
    handle(sortedArray: number[], itemToSearch: number): boolean;
    isEndCondition: boolean;
}