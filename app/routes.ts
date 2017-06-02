import {AppEventsComponent} from "./events/app-events.component";
import {Routes} from "@angular/router";
import {EventDetailsComponent} from "./events/event-details/event-details.component";

export const appRoutes:Routes = [
    {
        path: 'events',
        component: AppEventsComponent
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    }
]