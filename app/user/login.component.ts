import {Component} from "@angular/core";
import {AuthService} from "./auth.service"
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {
            float: right;
            color: #e1615e;
            padding-left: 10px;
        }
    `]
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