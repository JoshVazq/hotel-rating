import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { AlertService, UserService, AuthenticationService } from '../services';
import { User, UserMode } from '../models';


@Injectable()
export class UserComponent {
    user: User;
    mode: UserMode;
    loading = false;
    UserMode: any = UserMode;

      constructor(
          protected router: Router,
          protected alertService: AlertService,
          protected authenticationService: AuthenticationService,
          protected userService: UserService) {}

}
