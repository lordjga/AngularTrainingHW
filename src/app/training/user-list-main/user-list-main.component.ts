import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { FavoriteService } from '../shared/card-module/favorite-list/favorite.service';
import { UserMapService } from './services/user-map.service';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-user-list-main',
    templateUrl: './user-list-main.component.html',
    styleUrls: ['./user-list-main.component.css']
    , providers: [FavoriteService]
})
export class UserListMainComponent implements OnInit {
    usersCards: Array<Card> = [];

    constructor(
        private dataService: UserMapService,
        private userService: UserService) { }

    ngOnInit(): void {
        this.usersCards = this.dataService.convertUsersToCards(this.userService.getUserData) ;
    }

    get getUsersCards(): Array<Card> {
        return this.usersCards;
    }
}
