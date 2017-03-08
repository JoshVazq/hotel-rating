import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx'

import { User } from './user';
import { HttpService } from '../services';

@Injectable()
export class UserService extends HttpService {

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }
}
