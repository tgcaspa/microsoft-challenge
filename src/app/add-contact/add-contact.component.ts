import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactModel } from "../my-contacts/contacts-grid/contact.model";
import { ContactService } from "../my-contacts/contacts-grid/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

    form: FormGroup;
    submiting: boolean;

    constructor(private fb: FormBuilder,
                private router: Router,
                private contactSvc: ContactService) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.compose([
                Validators.required,
                Validators.pattern('[0-9]+')
            ])]
        });
        this.submiting = false;
    }

    submitNewCustomer(form: FormGroup) {
        this.submiting = true;
        const value:ContactModel = form.value;

        this.contactSvc.addContact(value)
            .subscribe(
            (result: boolean) => {
                if(result) {
                    this.router.navigate(['/my-contacts']);
                } else {
                    alert('Some error occurred while adding contact.')
                }
            },
            (error: Response) => {
                alert(error);
                this.submiting = false;
            }
        );
    }

}
