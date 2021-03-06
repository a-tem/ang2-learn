import {AppEventsComponent} from "./events/app-events.component";
import {Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";

import {
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    AppEventsResolver
} from './events/index'
import {LoginComponent} from "./user/login.component";

export const appRoutes:Routes = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateElement']   // it will be a Service or a Function. in this case, we use a Function - it's name in quotes
    },
    {
        path: 'events',
        component: AppEventsComponent,
        resolve: {events: AppEventsResolver}    // before this calling this route, call the AppEventsResolver, and when that resolver finishes and returns with some data, add this data to the routes with ne property name "events"
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
    },
    //  for lazily load feature module
    {
        path: 'user',
        loadChildren: "app/user/user.module#UserModule"
    }
];