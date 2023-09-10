import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const unAuthGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);

    if (!authService.isLogged) { return true; }

    return false;
};
