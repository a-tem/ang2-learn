import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    template: `
        <h1>Nev Event</h1>
        <hr>
        <h3>[New event description will be here]</h3>
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-default" (click)="cancel()">Cancel</button>
    `
})
export class CreateEventComponent {
    isDirty:boolean = true;
    constructor(private router: Router){

    }
    cancel(){
        this.router.navigate(["/events"])
    }
}