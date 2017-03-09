import { Component, OnInit } from '@angular/core';

import { UserComponent } from './user.component';
import { User, UserMode } from '../models';

@Component({
    selector: 'app-register',
    templateUrl: './user.component.html'
})

export class RegisterComponent extends UserComponent implements OnInit {
    mode = UserMode.Register;
    user = new User();

    ngOnInit() {
    }

    submit() {
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(
            data => {
                this.login();
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    login() {
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
            data => {
                this.router.navigate(['/']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
