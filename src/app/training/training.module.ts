import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TrainingContainerComponent } from './training-container.component';
import { UserFormModule } from './user-form/user-form.module';
import { UserListMainModule } from './user-list-main/user-list-main.module';
import { VehicleListMainModule } from './vehicle-list-main/vehicle-list-main.module';


@NgModule({
    declarations: [
        TrainingContainerComponent
    ],
    imports: [
        CommonModule,
        UserListMainModule,
        VehicleListMainModule,
        UserFormModule,
        RouterModule
    ],
    exports: [
        TrainingContainerComponent
    ]
})
export class TrainingModule { }
