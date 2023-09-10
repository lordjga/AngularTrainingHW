import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const storageKey = 'user';

@Injectable()
export class AuthApiService {
    saveUser(user: string, pass: string): Observable<string> {
        localStorage.setItem(storageKey, user);

        return this.getUser(user);
    }

    saveNewUser(user: string, pass: string): Observable<string> {
        localStorage.setItem(storageKey, user);

        return this.getUser(user);
    }

    getUser(user: string): Observable<string> {
        return of(localStorage[storageKey] || '');
    }

    logOut(): void {
        localStorage.removeItem(storageKey);
    }
}
