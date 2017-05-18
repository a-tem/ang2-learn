import {Component, Input} from "@angular/core";

@Component ({
    selector: "app-component",
    template: `
        App Component Here
        <app-events (eventClick)="myListener($event)"></app-events>
    `
})

export class AppComponentComponent {
    myListener(data) {
        console.log("in root scope");
        alert(data);
    }
}