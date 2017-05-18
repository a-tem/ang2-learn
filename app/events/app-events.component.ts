import {Component} from "@angular/core";

@Component({
    selector: "app-events",
    template: `
        <h1>Events Calendar:</h1>
        <hr>
        <h2>{{events.title}}</h2>
        <div>Date: {{events.date}}</div>
        <div>Time: {{events.time}}</div>
        <app-event [location]="events.location"></app-event>
    `
})

export class AppEventsComponent {
    text: string =  "Hi there";
    constructor () {
        this.text = "updated in  constructor";
    }
    events = {
        title: "First Event Title",
        date: "09/08/2018",
        time: "10:00 AM",
        location: {
            country: "Ukraine",
            city: "Kiev",
            address: "Moskovsky ave. 9B"
        }
    };
}