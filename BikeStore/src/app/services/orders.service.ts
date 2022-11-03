import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEAPIURL } from 'src/assets/Settings';
import { Order } from '../domain-model/models/Order';
import { OrderItem } from '../domain-model/models/OrderItems';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }


  public getOrders(customerId:number): Observable<Order[]> {
    const url = BASEAPIURL + '/Orders';
    return this.httpClient.get<Order[]>(url, { params: { id: customerId } });
  }

  public getOrderItems(id:number): Observable<OrderItem[]> {
    const url = BASEAPIURL + '/Orders/orderItems/' + id;
    return this.httpClient.get<OrderItem[]>(url);
  }
}
