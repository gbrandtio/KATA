import { EmptyArrayHandler } from "./Handlers/EndConditionRules/EmptyArrayHandler";
import { LastItemHandler } from "./Handlers/EndConditionRules/LastItemHandler";
import { MiddleItemHandler } from "./Handlers/EndConditionRules/MiddleItemHandler";
import { WhichHalfHandler } from "./Handlers/BinarySearchRules/WhichHalfHandler";

/**
 * A binary chop (sometimes called the more prosaic binary search) finds the position of value in a sorted array of values. 
 * It achieves some efficiency by halving the number of items under consideration each time it probes the values: 
 * in the first pass it determines whether the required value is in the top or the bottom half of the list of values. 
 * In the second pass in considers only this half, again dividing it in to two. 
 * 
 * It stops when it finds the value it is looking for, or when it runs out of array to search.
 */
export class BinarySearch {
    private endConditionHandlers: BaseEndConditionHandler[] = [];
    private binarySearchHandlers: BaseBinarySearchHandler[] = [];

    public Search(itemToSearch: number, sortedArray: number[]): boolean {
        for (let i = 0; i < this.endConditionHandlers.length; i++) {
            let endConditionHandler: BaseEndConditionHandler = this.endConditionHandlers[i];
            return endConditionHandler.handle(sortedArray, itemToSearch);
        }

        for (let i=0; i < this.binarySearchHandlers.length; i++) {
            let binarySearchHandler: BaseBinarySearchHandler = this.binarySearchHandlers[i];
            let handledSortedArray: number[] = binarySearchHandler.handle(sortedArray, itemToSearch);
            return this.Search(itemToSearch, handledSortedArray);
        }

        return false;
    }

    /**
     * Initializes the CoR for binary search end conditions.
     */
    public initializeEndConditions(): void {
        let emptyArrayHandler: BaseEndConditionHandler = new EmptyArrayHandler();
        let lastItemHandler: BaseEndConditionHandler = new LastItemHandler();
        let middleItemHandler: BaseEndConditionHandler = new MiddleItemHandler();

        emptyArrayHandler.setNext(lastItemHandler);
        lastItemHandler.setNext(middleItemHandler);

        this.endConditionHandlers.push(emptyArrayHandler);
        this.endConditionHandlers.push(lastItemHandler);
        this.endConditionHandlers.push(middleItemHandler);
    }

    /**
     * Initializes the CoR for binary search business logic.
     */
    public initializeBinarySearchHandlers(): void {
        let whichHalfHandler: BaseBinarySearchHandler = new WhichHalfHandler();

        this.binarySearchHandlers.push(whichHalfHandler);
    }
}
