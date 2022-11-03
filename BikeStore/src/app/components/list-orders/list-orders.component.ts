import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/domain-model/models/Order';
import { UserResponse } from 'src/app/domain-model/Responses/UserInfo';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  @Input() data!: Order[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOrderItems(id:number){
    console.log(id);
    this.router.navigate(['/order-items', id]);
  }
}
