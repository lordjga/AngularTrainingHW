import { Component } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { FavoriteService } from '../shared/card-module/favorite-list/favorite.service';
import { UserService } from '../shared/model/user.service';
import { UserMapService } from './user-map.service';

@Component({
    selector: 'app-user-list-main',
    templateUrl: './user-list-main.component.html',
    styleUrls: ['./user-list-main.component.css']
    , providers: [FavoriteService]
})
export class UserListMainComponent {
    usersCards: Array<Card> = [];

    constructor(
        private dataService: UserMapService,
        private userService: UserService) { }

    get getUsersCards(): Array<Card> {
        return this.dataService.convertUsersToCards(this.userService.getUserData);
    }
}
