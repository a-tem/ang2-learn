import {Component, Input} from "@angular/core";

@Component({
    selector: "app-event",
    template: `
        <div>
            <div>Place: {{location.country}}, {{location.city}}, {{location.address}}</div>
        </div>
    `
})

export class AppEventComponent {
    @Input() location: any
}