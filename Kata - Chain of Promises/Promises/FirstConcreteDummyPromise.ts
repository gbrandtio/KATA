import { BaseDummyPromise } from "./BaseDummyPromise";
import { MockRequest } from "../MockBehavior/MockRequest";

export class FirstConcreteDummyPromise extends BaseDummyPromise<boolean> {
    public isMatch(response: any): boolean {
        return true;
    }

    public async execute(data: any): Promise<boolean> {
        console.log("Executing first concrete dummy promise");

        let mockRequest: MockRequest = new MockRequest(this.expectDummyPromiseToBeResolved, {"code": 21007});
        const timeoutPromise: Promise<any> = new Promise((resolve, reject) => setTimeout(reject, this.timeout, "First promise timed out"));
        
        const result = await Promise.race([timeoutPromise, mockRequest.performMockRequest()]);
        return result;
    }
}