import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
//TODO Add @Input ratings
export class RatingComponent implements OnInit {
    @Input() itemId: number = 1;
    @Input() readonly: false;
    inputName: string;
    ratingValue: number = 0;
    ratings: any[];

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
        this.ratings = [
            { title: "Rocks!", value: 5 },
            { title: "Pretty good", value: 4 },
            { title: "Meh", value: 3 },
            { title: "Kinda bad", value: 2 },
            { title: "Sucks big time", value: 1 }
        ];
    }

}
