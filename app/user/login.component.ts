import {Component} from "@angular/core";

@Component({
    templateUrl: 'app/user/login.component.html'
})
export class LoginComponent {
    login(data){
        console.log(data);
    }
}