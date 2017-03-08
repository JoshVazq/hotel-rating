import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
//TODO switch for Service Worker or refractor
import { FakeBackendProvider } from './providers';

import {
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    NavbarComponent,
    InfoComponent,
    HotelListComponent,
    ReviewListComponent,
    ReviewAddComponent,
    ReviewViewComponent,
    HotelComponent,
    RatingComponent
} from './components';

import { EmailValidatorDirective, PasswordValidatorDirective } from './directives';

import {
    UserService,
    HotelService,
    ReviewService,
    AuthenticationService,
    AlertService
} from './services';

import { HotelsResolver, ReviewResolver, ReviewsResolver } from './resolvers';


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
        InfoComponent,
        HotelListComponent,
        HotelComponent,
        ReviewListComponent,
        ReviewAddComponent,
        ReviewViewComponent,
        RatingComponent,

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
      HotelService,
      ReviewService,
      AuthenticationService,
      AlertService,
      AuthenticationGuard,

      HotelsResolver,
      ReviewResolver,
      ReviewsResolver,

      FakeBackendProvider,
      MockBackend,
      BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
