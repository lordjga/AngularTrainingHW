import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';
import { AddressFormComponent } from './addresses-form/address-form/address-form.component';
import { RouterModule } from '@angular/router';
import { USER_FORM_ROUTES } from './routing/user-form-routing.module';

@NgModule({
    declarations: [
        UserFormComponent,
        AddressesFormComponent,
        AddressFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(USER_FORM_ROUTES),
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatButtonModule,
        MatDialogModule
    ],
    exports: [
        UserFormComponent,
    ]
})
export class UserFormModule { }
