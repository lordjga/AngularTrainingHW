import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { UserListMainComponent } from './user-list-main.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';

import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { OrderByCreationDatePipe } from '../shared/pipes/order-by-creation-date.pipe';
import { CardModule } from '../shared/card-module/card.module';

@NgModule({
  declarations: [
    UserListMainComponent,
    UserListViewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    CardModule,

  ],
  exports: [
    UserListMainComponent
  ],
  providers:[
    OrderByCreationDatePipe,
    FullNamePipe,
    DatePipe,
    CurrencyPipe
  ]
})
export class UserListMainModule { }
