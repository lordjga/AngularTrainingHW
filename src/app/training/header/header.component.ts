import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../core/auth/services/auth-api.service';
import { AuthService } from '../core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(
        private authApi: AuthApiService,
        private auth: AuthService,
        private router: Router) {}

    logOut() {
        this.authApi.logOut();
        this.auth.setUser('');
        this.router.navigate(['login']);
    }
}
