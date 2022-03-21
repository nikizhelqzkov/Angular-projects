import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Injectable()
// {
//   providedIn: 'root'
// }
export class RegisterService {
  constructor() {}
  getList(): Observable<any> {
    return of(this.DATA);
  }
  getDetail(id: any): Observable<any> {
    return of(
      this.DATA.find((data) => {
        return data.id == id;
      })
    );
  }
  DATA = [
    {
      id: 0,
      name: 'John',
      age: 34,
    },
    {
      id: 1,
      name: 'John2',
      age: 35,
    },
    {
      id: 2,
      name: 'John4',
      age: 14,
    },
    {
      id: 3,
      name: 'Ivan',
      age: 16,
    },
    {
      id: 4,
      name: 'John',
      age: 34,
    },
  ];
}
