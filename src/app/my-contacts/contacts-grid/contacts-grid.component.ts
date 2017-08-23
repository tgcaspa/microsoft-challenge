import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContactModel } from "./contact.model";
import { FirstLetterPipe } from "./first-letter.pipe";

@Component({
    selector: 'app-contacts-grid',
    templateUrl: './contacts-grid.component.html',
    styleUrls: ['./contacts-grid.component.scss'],
    providers: [FirstLetterPipe]
})
export class ContactsGridComponent implements OnChanges {

    @Input() contactList: ContactModel[];
    alphabet: string;

    constructor() {
        this.alphabet = "";
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['contactList'] && !changes['contactList'].firstChange) {
            this.contactList = changes['contactList'].currentValue || [];
        }
    }

    isTitleBlock({name}) {
        const fl = new FirstLetterPipe().transform(name);
        if(this.alphabet === fl) {
            return false;
        }
        this.alphabet = fl;
        return true;
    }

}
