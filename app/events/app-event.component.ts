import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-event",
    template: `
        <div class="thumbnail well hoverwell">
            <h2>{{ev.name}}</h2>
            <div>Date: {{ev.date}}</div>
            <div [ngClass]="setClassName()" [ngSwitch]="ev?.time">Time: {{ev.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{ev.price}}</div>
            <div *ngIf="ev?.location">
                <div>Place: {{ev?.location?.country}}, {{ev?.location?.city}}, {{ev?.location?.address}}</div>
            </div>
            <div *ngIf="ev?.onlineUrl">Online: {{ev.onlineUrl}}</div>
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

        .bold {
            font-weight: 600;
        }
        .green {
            color: #50a226 !important;
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
    setClassName(){
        // using object notation
        /*const colorGreen = this.ev.time && this.ev.time === '8:00 am';
        return {green: colorGreen, bold: colorGreen};*/

        // using array notation
        let res = [];
        if(this.ev.time && this.ev.time === '8:00 am'){
            res = ['green','bold']
        }
        return res;
    }
}