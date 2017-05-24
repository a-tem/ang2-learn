import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {AppComponentComponent} from "./app-component"
import {AppEventsComponent} from "./events/app-events.component";
import {AppEventComponent} from "./events/app-event.component";
import {NavbarComponent} from "./nav/navbar.component";
import {EventService} from "./events/share/event.service";
import {ToastrService} from "./events/common/toastr.service";

@NgModule({
    // array of imports to Module
    imports: [
        BrowserModule
    ],
    // array of declared components (will able to use in all place of code)
    declarations: [
        AppComponentComponent,
        AppEventsComponent,
        AppEventComponent,
        NavbarComponent
    ],
    // array of included services
    providers: [
        EventService,
        ToastrService
    ],
    // initial module (execute firstly)
    bootstrap: [AppComponentComponent]
})

export class AppModule {}