import { BaseObservable } from "../Observable/BaseObservable";
import { NewsAgencyObservable } from "../Observable/NewsAgencyObservable";
import { BaseObserver } from "./BaseObserver";

export class ChannelBObserver implements BaseObserver {
    /**
     * See also {@link BaseObserver.update}.
     * Receives notifications from the observable that this observer is subscribed to.
     * @param subject The observable where the current observer will receive notifications from.
     * @returns A string representing the notification that the observer received.
     */
    update(subject: BaseObservable): string {
        let receivedNews: string = "";
        if (subject instanceof NewsAgencyObservable) {
            console.log("Channel B - Received news: " + subject.state);
            receivedNews = subject.state;  
        }

        return receivedNews;
    }
}