import {Component} from "@angular/core";

@Component({
    selector: "app-events",
    template: `
        <h1>Events Calendar:</h1>
        <h4 *ngIf="fromChild">you chose the <strong>{{fromChild}}</strong> event</h4>
        <hr>
        <div *ngFor="let event of events">
            <app-event [ev]="event" #eventEl (eventClick)="handleEventClicked($event)"></app-event>
            <!-- #eventEl prop - it's a reference (template) variable. Using for trigger child component properties/methods from parent component -->
            
            <h4>{{eventEl.referenceString}}</h4>
            <!-- using eventEl variable for access AppEventComponent public property -->
            
            <button class="btn btn-success" (click)="eventEl.getPlace()">gel location</button>
            <!-- using eventEl variable for trigger AppEventComponent inner method -->
        </div>
        
    `
})

export class AppEventsComponent {
    events = [
        {
            title: "First Event Title",
            date: "09/08/2018",
            time: "10:00 AM",
            location: {
                country: "Ukraine",
                city: "Kiev",
                address: "Moskovsky ave. 9B"
            }
        },
        {
            title: "Second Event Title",
            date: "25/09/2018",
            time: "2:00 PM",
            location: {
                country: "Ukraine",
                city: "Kiev",
                address: "Muzeiny str. 12"
            }
        },

    ];
    fromChild = "";
    handleEventClicked(data){
        console.log("parent catch data:");
        console.log(data);
        this.fromChild = data;
    }
}