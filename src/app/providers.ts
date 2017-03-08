import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { userSubscription } from './user/user.backend';
import { hotelSubscription } from './hotel/hotel.backend';
import { reviewSubscription } from './review/review.backend';

export function httpFactory(backend: MockBackend, options: BaseRequestOptions) {
    userSubscription(backend);
    hotelSubscription(backend);
    reviewSubscription(backend);
    return new Http(backend, options);
}

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: httpFactory,
    deps: [MockBackend, BaseRequestOptions]
};
