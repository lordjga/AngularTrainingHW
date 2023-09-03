import { CanDeactivateFn } from '@angular/router';
import { UserFormComponent } from './user-form.component';

export const userFormGuard:
    CanDeactivateFn<UserFormComponent> = (component, currentRoute, currentState, nextState) => {
        return component.getCanGoFromPage();
    };
