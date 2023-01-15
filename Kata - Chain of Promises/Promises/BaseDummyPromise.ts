export interface BaseDummyPromise<T> {
    execute(): Promise<T>
}