import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEAPIURL } from 'src/assets/Settings';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }


  public getOrders(customerId:number): Observable<any> {
    const url = BASEAPIURL + '/Orders';
    return this.httpClient.get(url, { params: { id: customerId } });
  }
}
