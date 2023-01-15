const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms));

export class MockRequest {
    private isResolved: boolean;
    private dataToReturn: any;

    public constructor(isResolved: boolean, dataToReturn: any) {
        this.isResolved = isResolved;
        this.dataToReturn = dataToReturn;
    }

    public async performMockRequest(): Promise<any> {        
        await sleep(4000);
        if (this.isResolved) {
            return Promise.resolve(this.dataToReturn);
        }
        else {
            return Promise.reject(this.dataToReturn);
        }
    }
}