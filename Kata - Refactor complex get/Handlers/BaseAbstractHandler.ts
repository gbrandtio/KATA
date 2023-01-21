import { BaseHandler } from "./BaseHandler";

export abstract class BaseAbstractHandler implements BaseHandler {
    private nextHandler!: BaseHandler;

    /**
     * Determines whether the handler is an end-condition handler, in which case
     * the {@link handle} method of each concrete handler will return a concrete result
     * instead of calling the next {@link BaseAbstractHandler.handle} method of the chain.
     * 
     * If this property is specified as true, the execution chain will be discontinued.
     */
    public abstract isEndHandler: boolean;

    /**
     * Sets the next handler to be executed on the chain.
     * @param nextHandler The next handler on the chain.
     */
    public setNext(nextHandler: BaseHandler): void {
        this.nextHandler = nextHandler;
    }

    /**
     * Executes recursively the {@link handle} methods of each concrete handler.
     * @param data The data to be used for the validation.
     * @returns The execution result of all the handlers in the chain.
     */
    public handle(data: any): boolean {
        if (this.nextHandler) {
            return this.nextHandler.handle(data);
        }

        return false;
    }
}