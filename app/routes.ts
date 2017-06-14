import {AppEventsComponent} from "./events/app-events.component";
import {Routes} from "@angular/router";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator.service";
import {AppEventsResolver} from "./events/app-events-resolver.service";

export const appRoutes:Routes = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateElement']   // it will be a Service or a Function. in this case, we use a Function - it's name in quotes
    },{
        path: 'events',
        component: AppEventsComponent,
        resolve: {events: AppEventsResolver}
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]  // in this case, we use a Service, we import it in top of file
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    }
];