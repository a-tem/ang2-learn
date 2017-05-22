import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {AppComponentComponent} from "./app-component"
import {AppEventsComponent} from "./events/app-events.component";
import {AppEventComponent} from "./events/app-event.component";
import {NavbarComponent} from "./nav/navbar.component";

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
    // initial module (execute firstly)
    bootstrap: [AppComponentComponent]
})

export class AppModule {}