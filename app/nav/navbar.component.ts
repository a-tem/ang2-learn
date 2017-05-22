import {Component} from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/navbar.component.html',
    styles: [`
        .navbar{
            font-size: 15px;
        }
        #searchForm{
            margin-right: 75px;
        }
        @media screen and (max-width: 1200px){
            #searchForm{
                display: none;
            }
        }
    `]
})

export class NavbarComponent {

}