import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../shared/card-module/card/card.model';
import { FavoriteService } from '../../shared/card-module/favorite-list/favorite.service';

@Component({
    selector: 'app-user-list-view',
    templateUrl: './user-list-view.component.html',
    styleUrls: ['./user-list-view.component.css']
})
export class UserListViewComponent {
    @Input() users: Array<Card> = [];

    label: string = 'User list View Component';
    public isShowOnlyActivated = false;

    constructor(private favoriteService: FavoriteService, private router: Router, private route: ActivatedRoute,) {
    }

    delete(user: Card) {
        var index = this.users.indexOf(user)
        if (index > -1) {
            this.users.splice(index, 1);
        }
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
