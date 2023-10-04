import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { FavoriteService } from './services/favorite.service';
import { UserMapService } from './services/user-map.service';
import { UserService } from './services/user.service';
import { BehaviorSubject, Subject, debounceTime, first, map, take, takeUntil, takeWhile } from 'rxjs';

@Component({
    selector: 'app-user-list-main',
    templateUrl: './user-list-main.component.html',
    styleUrls: ['./user-list-main.component.css']
    , providers: [FavoriteService]
})
export class UserListMainComponent implements OnInit {
    private usersCards: Array<Card> = [];
    private usersCards$: BehaviorSubject<Card[]> = new BehaviorSubject([] as Card[])

    constructor(
        private dataService: UserMapService,
        private userService: UserService,
        private favoriteService: FavoriteService) { }

    ngOnInit(): void {
        this.userService.getUserData$.pipe(map(x=>this.dataService.convertUsersToCards(x))).subscribe(res => {
            this.usersCards = res;
            this.usersCards$.next(this.usersCards);
          } )
        if (!this.userService.isDataLoaded)
            this.userService.getUsersFromServer();
    }

    get getUsersCards$(): BehaviorSubject<Card[]> {
        return this.usersCards$;
    }

    get getFavorCards$(): BehaviorSubject<Card[]> {
        return this.favoriteService.getfavorCards$;
    }

    delete(userCard: Card) {
        var index = this.usersCards?.indexOf(userCard)
        if (index > -1) {
            this.userService.deleteUserById(userCard.id)
            .pipe(first())
            .subscribe({
                next: (value) => { 
                    console.log('Deleted:', value); 
                    this.favoriteService.delete(userCard); 
                },
                error: (error) => { console.error('There is some error: ', error) },
                complete: () => { console.log('Delete Observable is completed') }
            });
            
        }
    }
}
