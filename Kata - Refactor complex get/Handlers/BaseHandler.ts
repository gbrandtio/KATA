export interface BaseHandler {
    isEndHandler: boolean;
    setNext(nextHandler: BaseHandler): void;
    handle(data: any): boolean;
}