import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/card.model';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  favorites: Array<Card> = [];
  label: string = 'Favorite list View Component';

  constructor(private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.favorites = this.favoriteService.getCards;
  }
}
