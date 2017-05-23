import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-event",
    template: `
        <div class="thumbnail well hoverwell">
            <h2>{{ev.name}}</h2>
            <div>Date: {{ev.date}}</div>
            <div>Time: {{ev.time}}</div>
            <div>Price: \${{ev.price}}</div>
            <div [hidden]="!ev?.location">
                <div>Place: {{ev?.location?.country}}, {{ev?.location?.city}}, {{ev?.location?.address}}</div>
            </div>
            <div [hidden]="!ev?.onlineUrl">Online: {{ev.onlineUrl}}</div>
            <!--<button class="btn btn-primary" (click)="handleClick()" >Choose!</button>-->
        </div>
    `,
    styles: [`
        .thumbnail {
            min-height: 210px;
        }
        .thumbnail div {
            color: #ddd;
        }
    `]
})

export class AppEventComponent {
    @Input() ev: any;
    @Output() eventClick = new EventEmitter();
    handleClick() {
        console.log('child clicked');
        this.eventClick.emit(this.ev.name)
    }
    referenceString: any = "reference text";
    getPlace() {
        console.log(this.ev.location)
    }
}