import { Routes } from "@angular/router";
import { userResolver } from "../services/user.resolver";
import { UserListMainComponent } from "../user-list-main.component";

export const USER_LIST_ROUTES: Routes = [
    {
        path: '',
        component: UserListMainComponent,
        resolve: { model: userResolver },
        children: []
    }
]
