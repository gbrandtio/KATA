export abstract class BaseHandler {
    private nextHandler!: BaseHandler;
    public setNext(nextHandler: BaseHandler): void {
        this.nextHandler = nextHandler;
    }

    public handle(username: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(username);
        }

        return username;
    }
}