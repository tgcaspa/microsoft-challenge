import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

declare let _: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'My Contacts';

    constructor(private router: Router,
                private titleSvc: Title) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                const copy = Object.assign({}, val);
                const data = copy.url.split('/').filter(url => url.length > 0);
                if (typeof data[0] !== "undefined") {
                    this.title = _.startCase(data[0]).replace(/-/gi, ' ');
                    titleSvc.setTitle(this.title);
                }
            }
        });
    }

}
