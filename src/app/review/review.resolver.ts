import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ReviewService } from '../services';
import { Review } from '../models';

@Injectable()
export class ReviewResolver implements Resolve<Review> {

  constructor(private reviewService: ReviewService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.reviewService.getById(route.params['id']);
  }
}

@Injectable()
export class ReviewsResolver implements Resolve<Review> {

  constructor(private reviewService: ReviewService) {}

  resolve() {
    return this.reviewService.getAll();
  }
}
