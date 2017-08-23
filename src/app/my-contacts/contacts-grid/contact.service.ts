import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ContactModel } from "./contact.model";
import { ServerConfig } from "../../../../config/server";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

    constructor(private http: Http,
                private serverSvc: ServerConfig) { }

    getCustomerList(): Observable<ContactModel[]> {
        return this.http.get(`${this.serverSvc.apiURL}/api/contacts`)
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error));
    }

    addContact(params: ContactModel): Observable<boolean> {
        return this.http.post(`${this.serverSvc.apiURL}/api/contact`, JSON.stringify(params))
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error));
    }

}