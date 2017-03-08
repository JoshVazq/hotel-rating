export enum UserRole {
  Admin,
  User
}
export enum UserMode {
    Register,
    View,
    Edit,
}
export class User {
    id: number;
    role: UserRole = UserRole.User;
    username: string = '';
    password: string = '';
    firstName: string = '';
    lastName: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
