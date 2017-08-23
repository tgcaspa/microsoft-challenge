import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { SearchFormComponent } from './my-contacts/search-form/search-form.component';
import { ContactsGridComponent } from './my-contacts/contacts-grid/contacts-grid.component';
import { ContactService } from "./my-contacts/contacts-grid/contact.service";
import { ServerConfig } from "../../config/server";
import { FirstLetterPipe } from './my-contacts/contacts-grid/first-letter.pipe';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
        ContactsGridComponent,
        FirstLetterPipe,
        AddContactComponent,
        MyContactsComponent,
        MenuNavbarComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutes,
        AngularFontAwesomeModule
    ],
    providers: [
        ServerConfig,
        ContactService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}