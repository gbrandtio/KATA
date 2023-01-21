import { BaseObservable } from "../Observable/BaseObservable";
import { NewsAgencyObservable } from "../Observable/NewsAgencyObservable";
import { BaseObserver } from "./BaseObserver";

export class ChannelAObserver implements BaseObserver {
    update(subject: BaseObservable): string {
        let receivedNews: string = "";
        if (subject instanceof NewsAgencyObservable) {
            console.log("Channel A - Received news: " + subject.state);
            receivedNews = subject.state;  
        }

        return receivedNews;
    }
}