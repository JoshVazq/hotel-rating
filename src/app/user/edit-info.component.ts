import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user.component';
import { UserMode } from '../models';

@Component({
    selector: 'user-info',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class EditInfoComponent extends UserComponent implements OnInit {
    mode =  UserMode.Edit;
    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    submit() {
      this.loading = true;
      this.userService.update(this.user)
          .subscribe(
          () => {
              localStorage.setItem('currentUser',JSON.stringify(this.user));
              this.router.navigate(['/profile']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
    }

}
