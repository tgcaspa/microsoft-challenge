/**
 * Created by dimah on 07/06/17.
 */

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { MyContactsComponent } from "./my-contacts/my-contacts.component";
import { AboutComponent } from "./about/about.component";
// Components

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'my-contacts',
        pathMatch: 'full'
    },
    {
		path: 'my-contacts',
      	component: MyContactsComponent
    },
    {
        path: 'add-contact',
        component: AddContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(ROUTES);