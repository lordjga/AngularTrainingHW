import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingContainerComponent } from './training-container.component';
import { UserListMainModule } from './user-list-main/user-list-main.module';
import { VehicleListMainModule } from './vehicle-list-main/vehicle-list-main.module';
import { RouterModule } from "@angular/router";
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormModule } from './user-form/user-form.module';


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
