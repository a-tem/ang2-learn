import {Injectable} from "@angular/core";
import {IUser} from './user.model'
@Injectable()
export class AuthService{
    currentUser: IUser;
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "Artem",
            lastName: "Voloshin",
        }
    }

    isAuthenticated(){
        return !!this.currentUser
    }

    updateCurrentUser(fName: string, lName: string){
        this.currentUser.firstName = fName;
        this.currentUser.lastName = lName
    }
}