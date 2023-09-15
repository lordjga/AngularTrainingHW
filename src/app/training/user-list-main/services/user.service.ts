import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../shared/model/user.model";
import { UserMapService } from "../../user-list-main/services/user-map.service";
import { UserApiService } from "./user-api.service";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private users: Array<User> = [];

    constructor(private userApiService: UserApiService, private userMapService: UserMapService, private activatedRoute: ActivatedRoute) {
        this.userApiService.getRandomUsers().subscribe(result => this.users = this.userMapService.convertRequestToUsers(result))
    }

    get getUserData(): Array<User> {
        return this.users;
    }

    async getUserDataAsync(): Promise<User[]> {
        return this.users;
    }

    getUserById(userId: any): Promise<User | undefined> {
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
