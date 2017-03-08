import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx'

import { HttpService } from '../services';
import { Review } from '../models';

@Injectable()
export class ReviewService extends HttpService {

    getAll() {
        return this.http.get('/api/reviews', this.jwt()).map((response: Response) => response.json());
    }
    getById(id: number) {
        return this.http.get('/api/reviews/' + id, this.jwt()).map((response: Response) => response.json());
    }
    create(review: Review) {
        return this.http.post('/api/reviews', review, this.jwt()).map((response: Response) => response.json());
    }

    update(review: Review) {
        return this.http.put('/api/reviews/' + review.id, review, this.jwt()).map((response: Response) => response.json());
    }
}
