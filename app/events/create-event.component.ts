import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: '',
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6"></div>
        <h3>[CreateEventComponent will go here]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    `
})
export class CreateEventComponent {
    constructor(private router: Router){

    }
    cancel(){
        this.router.navigate(["/events"]);
    }
}