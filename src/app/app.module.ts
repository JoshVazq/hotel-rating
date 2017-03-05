import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
//TODO switch for Service Worker or refractor
import { fakeBackendProvider } from './login/fake-backend';

import {
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    NavbarComponent
} from './components';

import { EmailValidatorDirective, PasswordValidatorDirective } from './directives';

import {
    UserService,
    AuthenticationService,
    AlertService
} from './services';

import { AuthenticationGuard } from './guards';

import { AppRouting } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,

        EmailValidatorDirective,
        PasswordValidatorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouting
    ],
    providers: [
      UserService,
      AuthenticationService,
      AlertService,
      AuthenticationGuard,

      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
