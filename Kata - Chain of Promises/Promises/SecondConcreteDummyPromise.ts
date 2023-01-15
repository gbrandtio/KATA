import { BaseDummyPromise } from "./BaseDummyPromise";
import { MockRequest } from "../MockBehavior/MockRequest";

const ERROR_POST_TO_SANDBOX_INSTEAD = 21007;

export class SecondConcreteDummyPromise extends BaseDummyPromise<string> {
    public isMatch(response: any): boolean {
        console.log("Checking rule match: " + JSON.stringify(response));
        switch (response.code) {
            case ERROR_POST_TO_SANDBOX_INSTEAD:
                return true;
            default:
                return false;
        }
    }

    public async execute(data: any): Promise<string> {
        console.log("Executing second concrete dummy promise");

        let mockRequest: MockRequest = new MockRequest(this.expectDummyPromiseToBeResolved, "Data result from SecondConcretePromise");
        const timeoutPromise: Promise<any> = new Promise((resolve, reject) => setTimeout(reject, this.timeout, "Second promise timed out"));

        const result = await Promise.race([timeoutPromise, mockRequest.performMockRequest()]);
        return result;
    }
}