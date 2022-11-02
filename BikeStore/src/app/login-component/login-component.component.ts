import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLoginRequest } from '../domain-model/Requests/UserRequest';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  public user: UserLoginRequest = new UserLoginRequest();
  constructor(private _authService: AuthService, private router: Router) {}
  public error: string = '';
  ngOnInit(): void {}
  public login() {
    console.log(this.user);
    this._authService.login(this.user).subscribe(
      (token: string) => {
        localStorage.setItem('authToken', token);
        this.router.navigate(['/user-info']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.error = error.error;
      }
    );
  }

  isFullLogin() {
    return this.user.username != '' && this.user.password != '';
  }
}
