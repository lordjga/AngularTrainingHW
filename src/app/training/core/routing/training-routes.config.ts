import { Routes } from "@angular/router";
import { TrainingContainerComponent } from "../../training-container.component";
import { authGuard } from "../auth/guards/auth.guard";
import { unAuthGuard } from "../auth/guards/un-auth.guard";


export const TRAINING_ROUTES: Routes = [
    {
        path: '',
        component: TrainingContainerComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
                canActivate: [unAuthGuard]
            },
            {
                path: 'user-list',
                loadChildren: () => import('../../user-list-main/user-list-main.module').then(m => m.UserListMainModule),
                canActivate: [authGuard]
            },
            {
                path: "user",
                loadChildren: () => import('../../user-form/user-form.module').then(m => m.UserFormModule),
                canActivate: [authGuard]
            }
        ]
    }
]
