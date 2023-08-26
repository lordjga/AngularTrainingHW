import { Routes } from "@angular/router";
import { TrainingContainerComponent } from "./training-container.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListMainComponent } from "./user-list-main/user-list-main.component";
import { VehicleListMainComponent } from "./vehicle-list-main/vehicle-list-main.component";

export const TRAINING_ROUTES: Routes = [
  {
    path: '',
    component: TrainingContainerComponent,
    children: [
      {
        path: 'user-list',
        //loadChildren: () => import('./user-list-main/user-list-main.module').then(m => m.UserListMainModule)
        component: UserListMainComponent
      },
      {
        path: 'add-new-user',
        component: UserFormComponent
      }
    ]
  }
]
