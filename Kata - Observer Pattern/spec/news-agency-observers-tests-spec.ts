import { BaseObservable } from "../Observable/BaseObservable";
import { NewsAgencyObservable } from "../Observable/NewsAgencyObservable";
import { BaseObserver } from "../Observers/BaseObserver";
import { ChannelBObserver } from "../Observers/ChanelBObserver";
import { ChannelAObserver } from "../Observers/ChannelAObserver";

describe("The subscribed observers", function () {
    let newsAgencyObservable: BaseObservable = new NewsAgencyObservable();
    let channelAObserver: BaseObserver = new ChannelAObserver();
    let channelBObserver: BaseObserver = new ChannelBObserver();

    beforeEach(() => {
        newsAgencyObservable = new NewsAgencyObservable();
        newsAgencyObservable.attach(channelAObserver);
        newsAgencyObservable.attach(channelBObserver);
    });

    it("are subscribing/unsubscribing to/from the observable successfully", function () {
        let detachedObserverMoreThanOneTime: boolean = false;

        detachedObserverMoreThanOneTime = newsAgencyObservable.detach(channelAObserver);
        detachedObserverMoreThanOneTime = newsAgencyObservable.detach(channelBObserver);
        detachedObserverMoreThanOneTime = newsAgencyObservable.detach(channelAObserver);

        expect(detachedObserverMoreThanOneTime).toBe(false);
    });

    it("receive the news reported by the observable if the observers are subscribed", function () {
        if (newsAgencyObservable instanceof NewsAgencyObservable) {
            spyOn(console, 'log');
            let newsToPublish: string = "Breaking news - Something very important happened."
            newsAgencyObservable.publishNews(newsToPublish);
            expect(console.log).toHaveBeenCalledWith("Channel A - Received news: " + newsToPublish);
            expect(console.log).toHaveBeenCalledWith("Channel B - Received news: " + newsToPublish);
        }
    });
});