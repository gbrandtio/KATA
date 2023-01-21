import { BaseObservable } from "../Observable/BaseObservable";

export interface BaseObserver {
    /**
     * Receives updates from the @see {@link BaseObservable.notify}.
     * @param subject The subject that the observer is subsribed to.
     */
    update(subject: BaseObservable): void;
}