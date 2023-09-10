import { Routes } from "@angular/router";
import { UserListMainComponent } from "../user-list-main.component";

export const USER_LIST_ROUTES: Routes = [
    {
        path: '',
        component: UserListMainComponent,
        children: []
    }
]
