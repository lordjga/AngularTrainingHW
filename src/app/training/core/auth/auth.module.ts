import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './routing/auth-routing.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthApiService } from './services/auth-api.service';


@NgModule({
    declarations: [
        RegistrationComponent,
        AuthComponent,
        LoginComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthRoutingModule,
       
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [
        AuthComponent
    ],
    providers: [
        AuthApiService
    ]
})
export class AuthModule { }
