import { BaseDummyPromise } from "./Promises/BaseDummyPromise"
import { SecondConcreteDummyPromise } from "./Promises/SecondConcreteDummyPromise";

export class Main {
    /**
     * Executes a chain of pre-configured promises of type @see {@link BaseDummyPromise} until a promise on the chain fails.
     * The execution of the chain will stop when the first promise on the chain fails to be resolved.
     * @param chainOfPromises The chain of the promises to be executed.
     * @returns The successful response of each promise, or a failure response.
     */
    public async executeChainOfPromises(chainOfPromises: BaseDummyPromise<any>[]): Promise<any> {
        let promiseExecutionResult: any;

        for (let i = 0; i < chainOfPromises.length; i++) {
            if (chainOfPromises[i].isMatch(promiseExecutionResult)) {
                promiseExecutionResult = await chainOfPromises[i].execute(promiseExecutionResult);
            }
        }

        return promiseExecutionResult;
    }
}