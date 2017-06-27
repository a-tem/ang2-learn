import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {RouterModule} from "@angular/router";
import {appRoutes} from './routes'
import {AppComponentComponent} from "./app-component"
import {NavbarComponent} from "./nav/navbar.component";
import {ToastrService} from "./events/common/toastr.service";
import {Error404Component} from "./errors/404.component";

import {
    AppEventsComponent,
    AppEventComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    AppEventsResolver

} from './events/index'

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
        { provide:  'canDeactivateCreateElement', useValue: checkDirtyState },
        AppEventsResolver
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