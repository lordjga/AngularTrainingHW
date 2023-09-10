import { Routes } from "@angular/router";
import { authGuard } from "../../core/auth/guards/auth.guard";
import { UserFormComponent } from "../user-form.component";
import { userFormGuard } from "../user-form.guard";

export const USER_FORM_ROUTES: Routes = [
    {
        path: '',
        canActivateChild: [authGuard],
        children: [
            {
                path: '', redirectTo: 'add-new-user', pathMatch: 'full' 
            },
            {
                path: 'add-new-user',
                component: UserFormComponent
            },
            {
                path: 'edit-user-page/:userId',
                component: UserFormComponent,
                canDeactivate: [userFormGuard],
                data: {
                    isEditMode: true
                }
            }
        ]
    }
]
