export interface BaseDummyPromise<T> {
    execute(data: T): Promise<T>
}