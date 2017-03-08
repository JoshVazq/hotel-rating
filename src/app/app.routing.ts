import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, LoginComponent, RegisterComponent, NavbarComponent, InfoComponent, HotelListComponent, HotelComponent, ReviewListComponent, ReviewAddComponent, ReviewViewComponent } from './components';
import { HotelsResolver, ReviewResolver, ReviewsResolver } from './resolvers';
import { AuthenticationGuard } from './guards';

const appRoutes: Routes = [
    {
        path: '', canActivate: [AuthenticationGuard],
        children: [
            { path: '', component: HomeComponent },
            { path: 'info', component: InfoComponent },
            { path: 'hotel-list', component: HotelListComponent },
            { path: 'hotel-list/:id', component: HotelComponent },
            {
                path: 'reviews', component: ReviewListComponent,
                resolve: {
                    reviews: ReviewsResolver
                }
            },
            {
                path: 'reviews/add', component: ReviewAddComponent,
                resolve: {
                    hotels: HotelsResolver
                }
            },
            {
                path: 'reviews/:id', component: ReviewViewComponent,
                resolve: {
                    hotels: HotelsResolver,
                    review: ReviewResolver
                }
            },
            { path: '', component: NavbarComponent, outlet: 'navbar' }
        ]
    },
    {
        path: '', children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
