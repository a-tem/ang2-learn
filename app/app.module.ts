import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {AppComponentComponent} from "./app-component"
import {AppEventsComponent} from "./events/app-events.component";
import {AppEventComponent} from "./events/app-event.component";
import {NavbarComponent} from "./nav/navbar.component";
import {EventService} from "./events/share/event.service";
import {ToastrService} from "./events/common/toastr.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from './routes'

@NgModule({
    // array of imports to Module
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes) // tell to RouterModule, which routs map use for routing URL path
    ],
    // array of declared components (will able to use in all place of code)
    declarations: [
        AppComponentComponent,
        AppEventsComponent,
        AppEventComponent,
        NavbarComponent,
        EventDetailsComponent
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