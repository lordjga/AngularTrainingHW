import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { VehicleListViewComponent } from './vehicle-list-view/vehicle-list-view.component';
import { VehicleListMainComponent } from './vehicle-list-main.component';
import { CardModule } from '../shared/card-module/card.module';
import { FavoriteService } from '../shared/card-module/favorite-list/favorite.service';

@NgModule({
  declarations: [
    VehicleListMainComponent,
    VehicleListViewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    CardModule
  ],
  exports: [
    VehicleListMainComponent
  ]
})
export class VehicleListMainModule { }
