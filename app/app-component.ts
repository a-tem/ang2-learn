import {Component} from "@angular/core";

@Component ({
    selector: "app-component",
    template: `
        <nav-bar></nav-bar>
        <!--<app-events (eventClick)="myListener($event)"></app-events>-->
        <router-outlet></router-outlet>
    `
})

export class AppComponentComponent {
    myListener(data) {
        console.log("in root scope");
        alert(data);
    }
}