import { Component, Input, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/domain-model/Responses/UserInfo';

@Component({
  selector: 'list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  @Input() user!: UserResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
