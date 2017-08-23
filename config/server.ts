import { Injectable } from '@angular/core';

@Injectable()
export class ServerConfig {

    readonly _URL = "http://localhost:8888";

    get apiURL(): string {
        return this._URL;
    }

}