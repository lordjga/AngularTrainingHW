import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../shared/card-module/card/card.model';
import { FavoriteService } from '../services/favorite.service';

@Component({
    selector: 'app-user-list-view',
    templateUrl: './user-list-view.component.html',
    styleUrls: ['./user-list-view.component.css']
})
export class UserListViewComponent {
    @Input() users: Array<Card> | null = [];

    @Output() deleteClick: EventEmitter<Card> = new EventEmitter<Card>();
    
    label: string = 'User list View Component';
    public isShowOnlyActivated = false;

    constructor(private favoriteService: FavoriteService, private router: Router, private route: ActivatedRoute,) {
    }

    delete(user: Card) {
        this.deleteClick.emit(user);
    }

    isShowUser(isUserActivated: boolean): boolean {
        return !this.isShowOnlyActivated || (this.isShowOnlyActivated && isUserActivated);
    }

    addToFavor(user: Card) {
        this.favoriteService.addToFavor(user);
    }

    redirectToEditUserPage(userId: number) {
        this.router.navigate(
            ['user/edit-user-page', userId]
        )
    }
}
