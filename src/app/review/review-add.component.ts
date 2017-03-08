import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ReviewComponent } from './review.component';
import { Review, ReviewMode } from '../models';

@Component({
  selector: 'app-review-add',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewAddComponent extends ReviewComponent {
  review: Review = new Review();
  mode =  ReviewMode.Add;
  ngOnInit() {
      super.ngOnInit();
      this.review.user = this.currentUser.id;


  }
  save(){
    this.loading = true;
    this.reviewService.create(this.review)
        .subscribe(
            data => {
                this.router.navigate(['/reviews']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });

  }

}
