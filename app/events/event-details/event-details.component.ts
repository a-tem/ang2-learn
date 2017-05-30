import {Component, Input, OnInit} from "@angular/core";
import {EventService} from "../share/event.service";


@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 10px;}
        .event-image {height: 100px;}
    `]
})

export class EventDetailsComponent implements OnInit{
    //@Input() id:any;
    event: any;
    constructor(private eventService: EventService){

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(1)
    }
}