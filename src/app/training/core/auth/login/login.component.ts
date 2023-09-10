import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Subject, take, takeUntil, tap } from 'rxjs';
import { AuthApiService } from '../services/auth-api.service';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
    public loginFormGroup = new FormGroup({
        userName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private authApi: AuthApiService,
        private authService: AuthService,
        private router: Router,) { }

    public onSubmit() {
        const { userName, password } = this.loginFormGroup.getRawValue()

        if (userName === null || password === null)
            return;

        this.authApi.saveUser(userName, password).pipe(
            take(1),
            filter((res) => !!res),
            tap((res) => {
                this.authService.setUser(res);
            }),
            tap(() => {
                this.router.navigate(['user-list']);
            }),
            takeUntil(this.destroy$),
        ).subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
