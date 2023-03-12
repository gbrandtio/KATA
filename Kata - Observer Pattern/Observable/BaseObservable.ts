import { BaseObserver } from "../Observers/BaseObserver";

export interface BaseObservable {
    /**
     * Subscribes an observer to the observable, so that it starts receiving events.
     * @param observer The observer to be subscribed.
     */
    attach(observer: BaseObserver): void;

    /**
     * Unsubscribes an observer from the observable, so that it doesn't receive any new updates.
     * @param observer The observer to be unsubsribed.
     */
    detach(observer: BaseObserver): boolean;

    /**
     * Notifies the subscribed observers for some event.
     */
    notify(): void;
}