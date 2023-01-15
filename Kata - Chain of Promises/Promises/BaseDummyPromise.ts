export abstract class BaseDummyPromise<T> {
    protected expectDummyPromiseToBeResolved: boolean;
    protected timeout: number;
    public constructor(expectDummyPromiseToBeResolved: boolean, timeout: number) {
        this.expectDummyPromiseToBeResolved = expectDummyPromiseToBeResolved;
        this.timeout = timeout;
    }

    abstract isMatch(response: any): boolean;
    abstract execute(data: T): Promise<T>
}