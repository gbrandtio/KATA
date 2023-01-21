import { BaseObserver } from "../Observers/BaseObserver";
import { BaseObservable } from "./BaseObservable";

export class NewsAgencyObservable implements BaseObservable {
    public state: string = "NoState";
    private observers: BaseObserver[] = [];

    /**
     * @see {@link BaseObservable.attach}
     * @param observer The observer to receive news.
     */
    public attach(observer: BaseObserver): void {
        this.observers.push(observer);
    }

    /**
     * @see {@link BaseObservable.detach}
     * @param observer The observer to stop receiving news.
     * @returns True if the observer was detached successfully.
     */
    public detach(observer: BaseObserver): boolean {
        let index: number = this.observers.indexOf(observer);
        if (index === -1) {
            return false;
        }

        this.observers.splice(index, 1);
        return true;
    }

    /**
     * @see {@link BaseObservable.notify}
     * Notifies all the channels that are subscribed to the observer with
     * the received news.
     */
    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    /**
     * Publishes the passed news to all the subscribed observers.
     * @param newsToPublish The news to be published to all the subscribed channels.
     */
    public publishNews(newsToPublish: string): void {
        this.state = newsToPublish;
        this.notify();
    }
}