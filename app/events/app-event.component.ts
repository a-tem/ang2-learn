import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-event",
    template: `
        <div class="thumbnail well hoverwell">
            <h2>{{ev.title}}</h2>
            <div>Date: {{ev.date}}</div>
            <div>Time: {{ev.time}}</div>
            <div>
                <div>Place: {{ev.location.country}}, {{ev.location.city}}, {{ev.location.address}}</div>
            </div>
            <button class="btn btn-primary" (click)="handleClick()" >Choose!</button>
        </div>
    `
})

export class AppEventComponent {
    @Input() ev: any;
    @Output() eventClick = new EventEmitter();
    handleClick() {
        console.log('child clicked');
        this.eventClick.emit(this.ev.title)
    }
    referenceString: any = "reference text";
    getPlace() {
        console.log(this.ev.location)
    }
}