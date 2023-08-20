import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListMainComponent } from './user-list-main.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserCardComponent } from './user-list-view/user-card/user-card.component';

import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { OrderByCreationDatePipe } from '../shared/pipes/order-by-creation-date.pipe';

@NgModule({
  declarations: [
    UserListMainComponent,
    UserListViewComponent,
    UserCardComponent,
    HighlightDirective,
    FullNamePipe,
    OrderByCreationDatePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    UserListMainComponent
  ],
  providers:[
    OrderByCreationDatePipe
  ]
})
export class UserListMainModule { }
