import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteListComponent } from '../../user-list-main/favorite-list/favorite-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        CardComponent,
        FavoriteListComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        CardComponent,
        FavoriteListComponent
    ]
})
export class CardModule { }
