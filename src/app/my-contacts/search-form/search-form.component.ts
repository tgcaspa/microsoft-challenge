import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactModel } from "../contacts-grid/contact.model";

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

    form: FormGroup;
    @Output() onSearchForm = new EventEmitter();

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            search: ''
        });
    }

    inputFilter(form: FormGroup) {
        const value = form.value;
        this.onSearchForm.next(value['search']);
    }
}
