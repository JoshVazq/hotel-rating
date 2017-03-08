import { Component, OnInit } from '@angular/core';

import { ReviewComponent } from './review.component';
import { ReviewMode, UserRole } from '../models';

@Component({
    selector: 'app-review-view',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})
export class ReviewViewComponent extends ReviewComponent implements OnInit {
    mode = ReviewMode.View;

    ngOnInit() {
        super.ngOnInit();
        if (this.currentUser.role === UserRole.Admin) {
            this.mode = ReviewMode.Moderate;
        }
        this.review = this.route.snapshot.data['review'];
    }

    save() {
        //TODO: move admin logic to other component
        if (this.mode === ReviewMode.Moderate) {
            this.loading = true;
            this.review.moderated = true;
            this.reviewService.update(this.review)
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

}
