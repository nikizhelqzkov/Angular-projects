import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/domain-model/models/Order';
import { UserResponse } from 'src/app/domain-model/Responses/UserInfo';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss'],
})
export class OrderHeaderComponent implements OnInit {
  public user!: UserResponse;
  public orders: Order[] = [];
  constructor(
    private router: Router,
    private _authService: AuthService,
    private _orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser(): void {
    this._authService.getUserInfo().subscribe(
      (user: UserResponse) => {
        this.user = user;
        console.log(this.user);
        this.loadOrdersPerUser();
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Your session has expired. Please login again.');
          this.router.navigate(['/login', 'orders']);
        }
      }
    );
  }
  loadOrdersPerUser(): void {
    if (this.user.user.customerId == 0) {
      return;
    }
    this._orderService
      .getOrders(this.user.user.customerId)
      .subscribe((orders: Order[]) => {
        console.log(orders);
        for (const order of orders) {
          if(this.orders.find(x=>x.id == order.id) == undefined){
            this.orders.push(order);
          }
        }
      });
  }
}
