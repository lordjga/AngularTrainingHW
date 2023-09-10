import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "../auth.component";
import { LoginComponent } from "../login/login.component";
import { RegistrationComponent } from "../registration/registration.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'registration',
                component: RegistrationComponent,
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
