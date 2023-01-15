import { Main } from "../main";
import { BaseDummyPromise } from "../Promises/BaseDummyPromise";
import { FirstConcreteDummyPromise } from "../Promises/FirstConcreteDummyPromise";
import { SecondConcreteDummyPromise } from "../Promises/SecondConcreteDummyPromise";

describe("The execution of the chain of promises", function () {
    let app: Main = new Main();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    it("completes successfully if all the promises complete successfully", async function () {
        const chainOfPromises: BaseDummyPromise<any>[] = [new FirstConcreteDummyPromise(true, 6000), new SecondConcreteDummyPromise(true, 6000)];
        
        const result = await executeChainOfPromisesParameterized(chainOfPromises);
        expect(result).toBe(true);
    });

    it("fails in case the first promise on the chain times out", async function () {
        const chainOfPromises: BaseDummyPromise<any>[] = [new FirstConcreteDummyPromise(true, 500), new SecondConcreteDummyPromise(true, 6000)];
        
        const result = await executeChainOfPromisesParameterized(chainOfPromises);
        expect(result).toBe(false);
    });

    it("fails in case the second promise on the chain times out", async function () {
        const chainOfPromises: BaseDummyPromise<any>[] = [new FirstConcreteDummyPromise(true, 6000), new SecondConcreteDummyPromise(true, 500)];
        
        const result = await executeChainOfPromisesParameterized(chainOfPromises);
        expect(result).toBe(false);
    });

    it("fails in case the first promise is not resolved", async function () {
        const chainOfPromises: BaseDummyPromise<any>[] = [new FirstConcreteDummyPromise(false, 6000), new SecondConcreteDummyPromise(true, 6000)];
        
        const result = await executeChainOfPromisesParameterized(chainOfPromises);
        expect(result).toBe(false);
    });

    async function executeChainOfPromisesParameterized(chainOfPromises: BaseDummyPromise<any>[]): Promise<boolean> {
        let promiseResult: boolean = false;

        await app.executeChainOfPromises(chainOfPromises)
            .then((response: any) => {
                console.log("Success: " + JSON.stringify(response));
                promiseResult = true;
            })
            .catch((error: any) => {
                console.log("Error: " + JSON.stringify(error));
                promiseResult = false;
            });
        
        return promiseResult;
    }
});