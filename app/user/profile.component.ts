import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './app/user/profile.component.html',
})
export class ProfileComponent implements OnInit{
    //
    profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router){

    }

    ngOnInit(){
        // create new controls
        let firstName = new FormControl(this.authService.currentUser.firstName);
        let lastName = new FormControl(this.authService.currentUser.lastName);

        // add new controls to a form, using FormGroup for that
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    goBack(){
        this.router.navigate(['/events'])
    }

    saveProfile(data){
        this.authService.updateCurrentUser(data.firstName, data.lastName);
        this.router.navigate(['/events'])
    }
}