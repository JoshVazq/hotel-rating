import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpService {
  constructor(protected http: Http) { }

    protected jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
