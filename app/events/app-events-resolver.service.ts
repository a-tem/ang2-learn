import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {EventService} from "./share/event.service";

@Injectable()
export class AppEventsResolver implements Resolve<any>{
    constructor(private eventService:EventService){}

    resolve(){
        // this.eventService.getEvents() - return an Observable
        return this.eventService.getEvents().map(events => events) // use map() method instead of subscribe(), because Observable use in Resolve() method
        // if in this case use subscribe - it will return a subscription, not an observable.
    }
}