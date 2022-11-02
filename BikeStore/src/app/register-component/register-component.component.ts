import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterRequest } from '../domain-model/Requests/UserRegisterRequest';
import { UserRegisterResponse } from '../domain-model/Responses/UserRegisterResponse';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss'],
})
export class RegisterComponentComponent implements OnInit {
  public validateError: string = '';
  public user: UserRegisterRequest = new UserRegisterRequest();
  constructor(private _authService: AuthService, private router: Router) {}
  public error: string = '';
  ngOnInit(): void {}
  register() {
    if (this.isFullLogin()) {
      this._authService.register(this.user).subscribe(
        (data: UserRegisterResponse) => {
      alert('Register success');
          this.router.navigate(['/login']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.error = error.error;
        }
      );
    }
    console.log(this.user);
  }

  isFullLogin() {
    if (this.user.Username === '') {
      this.validateError = 'Username is required';
      return false;
    }
    if (this.user.Password === '') {
      this.validateError = 'Password is required';
      return false;
    }
    if (this.user.Email === '') {
      this.validateError = 'Email is required';
      return false;
    }
    if (this.user.FirstName === '') {
      this.validateError = 'FirstName is required';
      return false;
    }
    if (this.user.LastName === '') {
      this.validateError = 'LastName is required';
      return false;
    }
    this.validateError = '';
    return true;
  }
}
