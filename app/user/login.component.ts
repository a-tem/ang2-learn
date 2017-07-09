import {Component} from "@angular/core";
import {AuthService} from "./auth.service"
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/login.component.html'
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router){

    }

    login(data){
        console.log(data);
        this.authService.loginUser(data.name, data.password);
        this.router.navigate(['/events'])
    }

    goBack(){
        this.router.navigate(['/events'])
    }
}