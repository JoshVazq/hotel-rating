import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user.component';
import { UserMode } from '../models';

@Component({
    selector: 'user-info',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class InfoComponent extends UserComponent implements OnInit {
    mode =  UserMode.View;
    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

}
