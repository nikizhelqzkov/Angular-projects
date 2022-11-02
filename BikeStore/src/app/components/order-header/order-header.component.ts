import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/domain-model/Responses/UserInfo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss']
})
export class OrderHeaderComponent implements OnInit {
public user!:UserResponse;
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser() {
    this._authService.getUserInfo().subscribe(
      (user: UserResponse) => {
        this.user = user;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Your session has expired. Please login again.');
          this.router.navigate(['/login','orders']);
        }
      }
    );
  }

}
