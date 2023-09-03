import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from './card.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent{
    @Input() card!: Card;

    @Output() deleteClick: EventEmitter<Card> = new EventEmitter<Card>();
    @Output() favorClick: EventEmitter<Card> = new EventEmitter<Card>();
    @Output() redirectClick: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    redirectToEdit() {
        this.redirectClick.emit(this.card.id);
    }

    onDeleteClick(card: Card) {
        this.deleteClick.emit(card);
    }

    onSwitchFavorClick(card: Card) {
        this.favorClick.emit(card);
    }
}
