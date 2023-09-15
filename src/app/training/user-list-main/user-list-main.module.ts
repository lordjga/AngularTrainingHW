import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListMainComponent } from './user-list-main.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { CardModule } from '../shared/card-module/card.module';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { OrderByCreationDatePipe } from '../shared/pipes/order-by-creation-date.pipe';
import { USER_LIST_ROUTES } from './routing/user-list-routing.module';

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
        RouterModule.forChild(USER_LIST_ROUTES)
    ],
    exports: [
        UserListMainComponent
    ],
    providers: [
        OrderByCreationDatePipe,
        FullNamePipe,
        DatePipe,
        CurrencyPipe
    ]
})
export class UserListMainModule { }
