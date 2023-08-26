import { Injectable } from "@angular/core";
import { usersInitialData } from "./user-data";
import { departments, Gender, User } from "./user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: Array<User> = [];

  constructor() {
    this.users = usersInitialData;
  }

  get getUserData(): Array<User> {
    return this.users;
  }

  AddNewUser(user: User) {
    this.users.push(user);
  }
}
