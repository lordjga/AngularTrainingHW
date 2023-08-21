import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    CardComponent,
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    CardComponent,
    FavoriteListComponent
  ]
})
export class CardModule { }
