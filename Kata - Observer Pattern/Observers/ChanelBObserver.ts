import { BaseObservable } from "../Observable/BaseObservable";
import { NewsAgencyObservable } from "../Observable/NewsAgencyObservable";
import { BaseObserver } from "./BaseObserver";

export class ChannelBObserver implements BaseObserver {
    update(subject: BaseObservable): string {
        let receivedNews: string = "";
        if (subject instanceof NewsAgencyObservable) {
            console.log("Channel B - Received news: " + subject.state);
            receivedNews = subject.state;  
        }

        return receivedNews;
    }
}