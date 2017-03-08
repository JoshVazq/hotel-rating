import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() itemId: number = 1;
  inputName: string;
  ratingValue = 0;

  @Output() ratingChange = new EventEmitter();

  @Input()
  get rating() {
    return this.ratingValue;
  }

  set rating(val) {
    this.ratingValue = val;
    this.ratingChange.emit(this.ratingValue);
  }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
      this.rating = rating;
  }

}
