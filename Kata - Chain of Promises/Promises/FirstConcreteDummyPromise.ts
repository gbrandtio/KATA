import { BaseDummyPromise } from "./BaseDummyPromise";
import { MockRequest } from "../MockBehavior/MockRequest";

export class FirstConcreteDummyPromise implements BaseDummyPromise<boolean> {
    private expectDummyPromiseToBeResolved: boolean;
    private timeout: number;
    public constructor(expectDummyPromiseToBeResolved: boolean, timeout: number) {
        this.expectDummyPromiseToBeResolved = expectDummyPromiseToBeResolved;
        this.timeout = timeout;
    }

    public async execute(data: any): Promise<boolean> {
        console.log("Received data: " + data);
        let mockRequest: MockRequest = new MockRequest(this.expectDummyPromiseToBeResolved, "Data result from FirstConcretePromise");
        const timeoutPromise: Promise<any> = new Promise((resolve, reject) => setTimeout(reject, this.timeout, "First promise timed out"));

        const result = await Promise.race([timeoutPromise, mockRequest.performMockRequest()]);
        return result;
    }
}