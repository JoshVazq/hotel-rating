import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AlertService, UserService, AuthenticationService } from '../services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                //this.alertService.success('Registration successful', true);
                this.login();
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    login() {
        this.authenticationService.login(this.model.username, this.model.password)
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
