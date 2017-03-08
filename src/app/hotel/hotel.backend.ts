import { Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockConnection } from '@angular/http/testing';

export function hotelSubscription(backend) {
    // array in local storage for registered hotels
    let hotels: any[] = JSON.parse(localStorage.getItem('hotels')) || [{
        id: 0,
        name: 'Hotel Rock'
    },{
        id: 1,
        name: 'Hotel Jazz'
    },{
        id: 2,
        name: 'Hotel Pop'
    }];

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // get hotels
            if (connection.request.url.endsWith('/api/hotels') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return hotels if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: hotels })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
            }

            // get hotel by id
            if (connection.request.url.match(/\/api\/hotels\/\d+$/) && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return hotel if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find hotel by id in hotels array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedHotels = hotels.filter(hotel => { return hotel.id === id; });
                    let hotel = matchedHotels.length ? matchedHotels[0] : null;

                    // respond 200 OK with hotel
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: hotel })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
            }

        }, 500);

    });
}
