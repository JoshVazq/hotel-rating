import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AlertService, ReviewService } from '../services';
import { User, UserRole, Review, Hotel } from '../models';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
  hotels: any;
  availableHotels: Hotel[];
  currentUser: User;
  UserRole:any = UserRole;

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private reviewService: ReviewService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  ngOnInit() {
    this.reviews = this.route.snapshot.data['reviews'];
    let reviewedHotels = Array.from(this.reviews,review => review.hotel);
    this.hotels = new Map(this.route.snapshot.data['hotels'].map((hotel) => [hotel.id, hotel]));
    this.availableHotels = this.route.snapshot.data['hotels'].filter(hotel => !~reviewedHotels.indexOf(hotel.id));
    localStorage.setItem('availableHotels',JSON.stringify(this.availableHotels));
}


}
