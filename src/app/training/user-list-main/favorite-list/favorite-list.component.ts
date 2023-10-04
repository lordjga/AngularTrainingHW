import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../shared/card-module/card/card.model';
import { FavoriteService } from '../services/favorite.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-favorite-list',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
    @Input() favorites: Array<Card> | null = [];
    label: string = 'Favorite list View Component';

    constructor(private favoriteService: FavoriteService, private router: Router) {
    }

    ngOnInit(): void {
    }

    redirectToEditUserPage(userId: number) {
        this.router.navigate(
            ['user/edit-user-page', userId]
        )
    }
    
    delete(user: Card) {
        this.favoriteService.delete(user);
    }
}
