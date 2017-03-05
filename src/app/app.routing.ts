import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, LoginComponent, RegisterComponent, NavbarComponent } from './components';
import { AuthenticationGuard } from './guards';

const appRoutes: Routes = [
    { path: '', canActivate: [AuthenticationGuard],
      children: [
        { path: '' , component: HomeComponent },
        { path: '' , component: NavbarComponent, outlet: 'navbar'}
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
