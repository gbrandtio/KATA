import { EmptyArrayHandler } from "./Handlers/EndConditionRules/EmptyArrayHandler";
import { LastItemHandler } from "./Handlers/EndConditionRules/LastItemHandler";
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

    /**
     * Executes the Binary Search algorithm by executing the @see EndConditionRules and @see BinarySearchRules handlers.
     * @param itemToSearch The item to search on the array.
     * @param sortedArray A sorted array of numbers.
     * @returns true if the passed number exists on the passed sorted array.
     */
    public search(itemToSearch: number, sortedArray: number[]): boolean {
        
        for (let i = 0; i < this.endConditionHandlers.length; i++) {
            let endConditionHandler: BaseEndConditionHandler = this.endConditionHandlers[i];
            if (endConditionHandler.isMatch(sortedArray)) {
                return endConditionHandler.handle(sortedArray, itemToSearch);
            }
        }

        for (let i = 0; i < this.binarySearchHandlers.length; i++) {
            let binarySearchHandler: BaseBinarySearchHandler = this.binarySearchHandlers[i];
            let handledSortedArray: any = binarySearchHandler.handle(sortedArray, itemToSearch);
            return this.search(itemToSearch, handledSortedArray);
        }

        return false;
    }

    /**
     * Initializes the CoR for binary search end conditions.
     */
    public initializeEndConditions(): void {
        let emptyArrayHandler: BaseEndConditionHandler = new EmptyArrayHandler();
        let lastItemHandler: BaseEndConditionHandler = new LastItemHandler();

        emptyArrayHandler.setNext(lastItemHandler);

        this.endConditionHandlers.push(emptyArrayHandler);
        this.endConditionHandlers.push(lastItemHandler);
    }

    /**
     * Initializes the CoR for binary search business logic.
     */
    public initializeBinarySearchHandlers(): void {
        let whichHalfHandler: BaseBinarySearchHandler = new WhichHalfHandler();

        this.binarySearchHandlers.push(whichHalfHandler);
    }
}
