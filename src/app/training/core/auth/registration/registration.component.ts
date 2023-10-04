import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Subject, take, takeUntil, tap } from 'rxjs';
import { AuthApiService } from '../services/auth-api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
    public registrFormGroup = new FormGroup({
        userName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        repeatPassword: new FormControl('', [Validators.required, this.repeatPasswordValidator()])
    })

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private authApi: AuthApiService,
        private authService: AuthService,
        private router: Router,) { }

    public onSubmit() {
        const { userName, password } = this.registrFormGroup.getRawValue() 

        if (userName === null || password === null)
            return;

        this.authApi.saveUser(userName, password).pipe(
            take(1),
            filter((res) => !!res),
            tap((res) => {
                this.authService.addNewUser(res);
            }),
            tap(() => {
                this.router.navigate(['user-list']);
            }),
            takeUntil(this.destroy$),
        ).subscribe();
    }

    //"validation region"
    repeatPasswordValidator(): ValidatorFn {       
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null;

            let pass = this.registrFormGroup.get('password');
            if (!pass) return null;

            pass.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });

            return pass.value !== control.value.toString() ? { repeatPassword: true } : null;
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
