import {Component, OnInit} from "@angular/core";
import {EventService} from "../share/event.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../share/event.model";


@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 10px;}
        .event-image {height: 100px;}
    `]
})

export class EventDetailsComponent implements OnInit{
    event: IEvent;
    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ){

    }
    ngOnInit(){
        // this.route.snapshot.params['id'] expression get the 'id' parameter from URL
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']) // + sign in front of expression just convert string to number
    }
}