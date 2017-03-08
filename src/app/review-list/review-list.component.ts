import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AlertService, ReviewService } from '../services';
import { User, UserRole, Review } from '../models';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
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
  }


}
