import { Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockConnection } from '@angular/http/testing';
import { UserRole } from '../models';

export function reviewSubscription(backend) {
    // array in local storage for registered reviews
    let reviews: any[];

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        setTimeout(() => {

            // get reviews
            if (connection.request.url.endsWith('/api/reviews') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return reviews if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    let matchedReviews = [];
                    if(reviews){
                      if(currentUser.role === UserRole.Admin){
                        matchedReviews = reviews.filter(review => { return !review.moderated; });
                      }else{
                        matchedReviews = reviews.filter(review => { return review.user === currentUser.id; });
                      }
                    }

                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: matchedReviews })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
            }

            // get review by id
            if (connection.request.url.match(/\/api\/reviews\/\d+$/) && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return review if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find review by id in reviews array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedReviews = reviews.filter(review => { return review.id === id; });
                    let review = matchedReviews.length ? matchedReviews[0] : null;

                    // respond 200 OK with review
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: review })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
            }

            // create review
            if (connection.request.url.endsWith('/api/reviews') && connection.request.method === RequestMethod.Post) {
                // get new review object from post body
                let newReview = JSON.parse(connection.request.getBody());

                // save new review
                newReview.id = reviews.length + 1;
                reviews.push(newReview);
                localStorage.setItem('reviews', JSON.stringify(reviews));

                // respond 200 OK
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
            }

            // update review
            if (connection.request.url.match(/\/api\/reviews\/\d+$/) && connection.request.method === RequestMethod.Put) {
                // check for fake auth token in header and return review if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let updatedReview = JSON.parse(connection.request.getBody());

                    // find review by id in reviews array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < reviews.length; i++) {
                        let review = reviews[i];
                        if (review.id === id) {
                            // update review
                            reviews[i] = updatedReview;
                            localStorage.setItem('reviews', JSON.stringify(reviews));
                            break;
                        }
                    }

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
            }

        }, 500);

    });
}
