import {Component, OnInit} from "@angular/core";
import {EventService} from "./share/event.service";
import {ToastrService} from "./common/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `
        <h1>Events Calendar:</h1>
        <h4 *ngIf="fromChild">you chose the <strong>{{fromChild}}</strong> event</h4>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <app-event [ev]="event" #eventEl (eventClick)="handleEventClicked($event)" (click)="sayName(event.name)"></app-event>
                <!-- #eventEl prop - it's a reference (template) variable. Using for trigger child component properties/methods from parent component -->
                
                <!--<h4>{{eventEl.referenceString}}</h4>-->
                <!-- using eventEl variable for access AppEventComponent public property -->
                
                <!--<button class="btn btn-success" (click)="eventEl.getPlace()">gel location</button>-->
                <!-- using eventEl variable for trigger AppEventComponent inner method -->
            </div>
        </div>
        
    `
})

// implements OnInit not required, but it's a good practice to not forget define ngOnInit method
// p.s. without defining this method, TS will alert about it
export class AppEventsComponent implements OnInit{
    events: any;

    /*
    // defining variables in controller's arguments - it's a shorthand for next:
    constructor(private eventService: EventService){}

    equals:

    eventService;
    constructor(private eventService: EventService){
        this.eventService = eventService
    }
    */

    constructor(private toastr: ToastrService, private route: ActivatedRoute){}

    // run inner code after the component will be initialized
    ngOnInit(){
        // previous, before using Observable (before ad Resolver for this component)
        //this.events = this.eventsService.getEvents();

        // this actions not useful anymore, because we did it in Resolver
        // get the data from Observable by subscribing to it. It's going to eventually, instead of immediately
        /*this.eventService.getEvents().subscribe(event => {
            // set this.events value after Observable receive the data
            this.events = event
        })*/

        // instead of using subscription to Observable, we just use events parameter from Resolver in this route (look at routes.ts)
        this.events = this.route.snapshot.data['events']
    }

    fromChild = "";
    handleEventClicked(data){
        console.log("parent catch data:");
        console.log(data);
        this.fromChild = data;
    }

    sayName(name){
        this.toastr.info("Toastr info!", name)
    }
}