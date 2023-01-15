import { BaseDummyPromise } from "./BaseDummyPromise";
import { MockRequest } from "../MockBehavior/MockRequest";

export class SecondConcreteDummyPromise implements BaseDummyPromise<string> {
    private expectDummyPromiseToBeResolved: boolean;
    private timeout: number;
    public constructor(expectDummyPromiseToBeResolved: boolean, timeout: number) {
        this.expectDummyPromiseToBeResolved = expectDummyPromiseToBeResolved;
        this.timeout = timeout;
    }

    public async execute(): Promise<string> {
        let mockRequest: MockRequest = new MockRequest(this.expectDummyPromiseToBeResolved, "Data result from SecondConcretePromise");
        const timeoutPromise: Promise<any> = new Promise((resolve, reject) => setTimeout(reject, this.timeout, "Second promise timed out"));

        const result = await Promise.race([timeoutPromise, mockRequest.performMockRequest()]);
        return result;
    }
}