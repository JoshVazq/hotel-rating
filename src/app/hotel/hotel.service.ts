import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx'

import { HttpService } from '../services';

@Injectable()
export class HotelService extends HttpService {

    getAll() {
        return this.http.get('/api/hotels', this.jwt()).map((response: Response) => response.json());
    }
    getById(id: number) {
        return this.http.get('/api/hotels/' + id, this.jwt()).map((response: Response) => response.json());
    }
}
