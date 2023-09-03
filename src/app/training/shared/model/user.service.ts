import { Injectable } from "@angular/core";
import { usersInitialData } from "./user-data";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private users: Array<User> = [];

    constructor() {
        this.users = usersInitialData;
    }

    get getUserData(): Array<User> {
        return this.users;
    }

    async getUserDataAsync(): Promise<User[]> {
        return this.users;
    }

    getUserById(userId: number): Promise<User | undefined> {
        return this.getUserDataAsync()
            .then(users => users.find(user => user.id === userId));
    }

    AddNewUser(user: User) {
        user.id = this.generateId();
        this.users.push(user);
    }

    UpdateUser(user: User) {
        if (user) {
            this.getUserById(user.id).then(x => x = user);
        }
    }

    private generateId(): number {
        return this.users.sort(x => x.id).pop()?.id ?? + 1;
    }
}
