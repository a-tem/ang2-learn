import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {AppComponentComponent} from "./app-component"

@NgModule({
    // array of imports to Module
    imports: [
        BrowserModule
    ],
    // array of declared components (will able to use in all place of code)
    declarations: [
        AppComponentComponent
    ],
    // initial module (execute firstly)
    bootstrap: [AppComponentComponent]
})

export class AppModule {}