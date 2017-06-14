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
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator.service";

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
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    // array of included services
    providers: [
        // it's a shorthand notation
        EventService,
        // it's a long form notation, the short form is equals to this
        //{ provide: EventService, useValue: EventService },
        ToastrService,
        EventRouteActivator,
        // for using function as a provider, we must use long form only
        { provide:  'canDeactivateCreateElement', useValue: checkDirtyState }
    ],
    // initial module (execute firstly)
    bootstrap: [AppComponentComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty){
        return window.confirm("You didn't save your changes. Are you want to discard it?");
    }
    return true;
}