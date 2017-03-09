import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AlertService, ReviewService, HotelService } from '../services';
import { User, Hotel, Review, ReviewMode } from '../models';

@Injectable()
export class ReviewComponent implements OnInit {
    review: Review;
    currentUser: User;
    hotels: Hotel[];

    loading = false;
    mode: ReviewMode;
    ReviewMode: any = ReviewMode;

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected alertService: AlertService,
        protected hotelService: HotelService,
        protected reviewService: ReviewService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.hotels = this.route.snapshot.data['hotels'];
    }

}
