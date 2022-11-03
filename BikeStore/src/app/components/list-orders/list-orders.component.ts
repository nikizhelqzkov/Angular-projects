import { Component, Input, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/domain-model/Responses/UserInfo';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  @Input() data!: any;
  constructor() { }

  ngOnInit(): void {
    // this._orderService.getOrders(this.user.user.customerId).subscribe((res)=>{
    //   debugger;
    //   console.log(res);
    // });
  }

}
