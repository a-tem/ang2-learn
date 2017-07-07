// Lazily load module
// Feature module use CommonModule in imports. AppModule use BrowserModule

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {RouterModule} from "@angular/router"
import {userRoutes} from "./user.routes";
import {ProfileComponent} from "./profile.component"
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes) // in AppModule use RouterModule.forRoot, in FeatureModule - use RouterModule.forChild
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})

export class UserModule {

}