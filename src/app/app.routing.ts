import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, LoginComponent, RegisterComponent, NavbarComponent, InfoComponent, EditInfoComponent, ReviewListComponent, ReviewAddComponent, ReviewViewComponent } from './components';
import { HotelsResolver, ReviewResolver, ReviewsResolver } from './resolvers';
import { AuthenticationGuard } from './guards';

const appRoutes: Routes = [
    { path: '', redirectTo: '/profile', pathMatch: 'full'},
    {
        path: '', canActivate: [AuthenticationGuard],
        children: [
            /*{ path: '', component: HomeComponent },*/
            { path: 'profile', component: InfoComponent },
            { path: 'profile/edit', component: EditInfoComponent },
            {
                path: 'reviews', component: ReviewListComponent,
                resolve: {
                    reviews: ReviewsResolver,
                    hotels: HotelsResolver
                }
            },
            {
                path: 'reviews/add', component: ReviewAddComponent

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
    { path: '**', redirectTo: 'profile' }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
