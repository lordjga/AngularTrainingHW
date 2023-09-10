import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user: string = '';
    private users: string[] = new Array<string>;

    setUser(user: string) {
        this.user = user;
    }

    addNewUser(user: string) {
        this.setUser(user);

        this.users?.push(user);
    }

    get isLogged(): boolean {
        return !!this.user;
    }

    get getUsers() {
        return this.users;
    }
}
