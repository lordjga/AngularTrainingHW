import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteService } from './favorite-list/favorite.service';

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
  ],
  providers: [
    FavoriteService
  ]
})
export class CardModule { }
