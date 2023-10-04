import { Injectable } from '@angular/core';
import { Card } from '../../shared/card-module/card/card.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FavoriteService {
    private favorCards: Array<Card> = [];
    private favorCards$: BehaviorSubject<Card[]> = new BehaviorSubject([] as Card[]);

    constructor() {
    }

    public addToFavor(userCard: Card) {
        if (!this.getUserById(userCard.id)) {
            this.favorCards = [...this.favorCards, userCard];
            this.favorCards$.next(this.favorCards);
        }
    }

    public get getfavorCards(): Array<Card> {
        return this.favorCards;
    }

    public get getfavorCards$(): BehaviorSubject<Card[]> {
        return this.favorCards$;
    }

    delete(userCard: Card) {
        let card = this.getUserById(userCard.id);
        if (card) {
            var index = this.favorCards?.indexOf(card)
            if (index > -1) {
                this.favorCards?.splice(index, 1);
                this.favorCards$.next(this.favorCards);
            }
        }

    }

    getUserById(userId: any): Card | undefined {
        return this.getfavorCards.find(card => card.id === userId);
    }
}
