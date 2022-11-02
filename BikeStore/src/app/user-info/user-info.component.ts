import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../domain-model/models/User';
import { UserResponse } from '../domain-model/Responses/UserInfo';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  public data!: UserResponse;
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this._authService.getUserInfo().subscribe(
      (user: UserResponse) => {
        this.data = user;
        console.log(user);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          alert('Your session has expired. Please login again.');
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
