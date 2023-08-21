import { Injectable } from '@angular/core';
import { Card } from '../card/card.model';

@Injectable(
  //{
  //providedIn: 'root'
  //}
)
export class FavoriteService {
  private favorCards: Array<Card> = [];
  constructor() { }

  public addToFavor(card: Card) {
    var index = this.favorCards.indexOf(card)
    if (index > -1) {
      this.favorCards.splice(index, 1);
    }
    else {
      this.favorCards.push(card);
    }
  }

  public get getCards(): Array<Card> {
    return this.favorCards;
  }
}
