import { Component, OnInit } from '@angular/core';
import { ContactModel } from "./contacts-grid/contact.model";
import { ContactService } from "./contacts-grid/contact.service";

declare let _: any;

@Component({
    selector: 'app-my-contacts',
    templateUrl: './my-contacts.component.html',
    styleUrls: ['./my-contacts.component.scss']
})
export class MyContactsComponent implements OnInit {

    contactList: ContactModel[];
    contactListFull: ContactModel[];

    constructor(private contactSvc: ContactService) {
        this.contactList = null;
    }

    ngOnInit() {
        this.contactSvc.getCustomerList()
            .subscribe(
                (contacts: ContactModel[]) => {
                    this.contactListFull = contacts;
                    this.contactList     = contacts;
                },
                (error: Response) => alert(error)
            )
    }

    filterContactList(value: string) {
        this.contactList = null;

        const v_search = _.lowerCase(value) || "";

        if (_.isEmpty(v_search)) {
            this.contactList = this.contactListFull;
            return;
        }

        let filteredCustomerList = [];
        _.filter(this.contactListFull, function (item) {
            const i_name = _.lowerCase(item.name);
            const r_search = new RegExp(`${value}`);
            const n_match = i_name && i_name.match(r_search);
            const p_match = item.phone && item.phone.match(r_search);

            if (n_match || p_match) {
                filteredCustomerList.push(item);
            }
        });
        this.contactList = filteredCustomerList;
    }
}
