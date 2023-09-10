import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TrainingContainerComponent } from './training-container.component';
import { UserFormModule } from './user-form/user-form.module';
import { UserListMainModule } from './user-list-main/user-list-main.module';
import { VehicleListMainModule } from './vehicle-list-main/vehicle-list-main.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AuthModule } from './core/auth/auth.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        TrainingContainerComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        UserListMainModule,
        VehicleListMainModule,
        UserFormModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        AuthModule
    ],
    exports: [
        TrainingContainerComponent
    ]
})
export class TrainingModule { }
