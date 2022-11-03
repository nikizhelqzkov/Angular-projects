import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserLoginRequest } from '../../domain-model/Requests/UserRequest';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  public user: UserLoginRequest = new UserLoginRequest();
  constructor(
    private _authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public error: string = '';
  public lastUrl: string = 'user-info';
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.lastUrl = params.get('lastUrl') || 'user-info';
    },
    (error: HttpErrorResponse) => {
      console.log("Just heare",error);
      // this.error = error.error;

      this.lastUrl = 'user-info';
    });
  }
  public login() {
    console.log(this.user);
    this._authService.login(this.user).subscribe(
      (token: string) => {
        localStorage.setItem('authToken', token);
        this.router.navigate([`/${this.lastUrl}`]);
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
