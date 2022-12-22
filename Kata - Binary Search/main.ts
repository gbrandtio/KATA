import { EmptyArrayHandler } from "./Handlers/EmptyArrayHandler";
import { LastItemHandler } from "./Handlers/LastItemHandler";
import { MiddleItemHandler } from "./Handlers/MiddleItemHandler";
import { WhichHalfHandler } from "./Handlers/WhichHalfHandler";

/**
 * A binary chop (sometimes called the more prosaic binary search) finds the position of value in a sorted array of values. 
 * It achieves some efficiency by halving the number of items under consideration each time it probes the values: 
 * in the first pass it determines whether the required value is in the top or the bottom half of the list of values. 
 * In the second pass in considers only this half, again dividing it in to two. 
 * 
 * It stops when it finds the value it is looking for, or when it runs out of array to search.
 */
export class BinarySearch {
    handlers: Handler[] = [];

    public Search(x: number, sortedArray: number[]): boolean {
        let arrayLength: number = sortedArray.length;
        let middleItemIndex: number = Math.round(arrayLength / 2);

        for (let i=0; i<this.handlers.length; i++){
            let element: Handler = this.handlers[i];
            
            if (element.isEndCondition) {
                return element.handle(sortedArray, x);
            }
            
            if (element.handle(sortedArray, x)) {
                return this.Search(x, sortedArray.slice(middleItemIndex + 1, arrayLength));
            }
            else {
                return this.Search(x, sortedArray.slice(0, middleItemIndex));
            }
        }

        return false;
    }

    public initializeChain(): void {
        let emptyArrayHandler: Handler = new EmptyArrayHandler();
        let lastItemHandler: Handler = new LastItemHandler();
        let middleItemHandler: Handler = new MiddleItemHandler();
        let whichHalfHandler: Handler = new WhichHalfHandler();

        emptyArrayHandler.setNext(lastItemHandler);
        lastItemHandler.setNext(middleItemHandler);
        middleItemHandler.setNext(whichHalfHandler);

        this.handlers.push(emptyArrayHandler);
        this.handlers.push(lastItemHandler);
        this.handlers.push(middleItemHandler);
        this.handlers.push(whichHalfHandler);
    }
}
