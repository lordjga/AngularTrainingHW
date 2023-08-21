import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FavoriteService } from '../favorite-list/favorite.service';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card!: Card;

  @Output() deleteClick: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() favorClick: EventEmitter<Card> = new EventEmitter<Card>();
  
  // @ViewChild('content', { read: ElementRef, static: true }) content: ElementRef | undefined;

  // public Gender = Gender;
  // public title: string | null = "User card: ";

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    console.log(this.card.title + " is visible");
  }

  ngOnDestroy(): void {
    console.log(this.card.title  + " is hidden");
  }

  // onSwitchClick() {
  //   if (this.user) 
  //     this.user.activated = !this.user.activated;
  // }

  onDeleteClick(card: Card) {
    this.deleteClick.emit(card);
  }

  onSwitchFavorClick(card: Card) {
    this.favorClick.emit(card);
  }

  // get getActivated(): string {
  //   if (this.user) {
  //     return this.user.activated ? "Activated" : "Deactivated";
  //   }
  //   return ' ';
  // }

  // get getGender(): string {
  //   if (this.user) 
  //     return Gender[this.user?.gender];
  //   return ' ';
  // }
}
