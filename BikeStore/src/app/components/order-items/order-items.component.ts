import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItem } from 'src/app/domain-model/models/OrderItems';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
})
export class OrderItemsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _orderService: OrdersService,
    private router: Router
  ) {}
  public orderItems: OrderItem[] = [];
  private id!: number;
  ngOnInit(): void {
    this.loadItems();
  }
  loadItems(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +(params.get('id') || 0);
    });
    this._orderService.getOrderItems(this.id).subscribe(
      (items: OrderItem[]) => {
        this.orderItems = items;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Your session has expired. Please login again.');
          this.router.navigate(['/login', 'orders']);
        }
      }
    );
  }
}
