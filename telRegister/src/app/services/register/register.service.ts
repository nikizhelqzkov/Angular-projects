import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Injectable()
// {
//   // providedIn: 'root',
// }
export class RegisterService {
  constructor() {}
  getList(): Observable<any> {
    return of(this.DATA);
  }
  DATA = [
    {
      name: 'John',
      age: 34,
    },
    {
      name: 'John2',
      age: 35,
    },
    {
      name: 'John4',
      age: 14,
    },
    {
      name: 'Ivan',
      age: 16,
    },
    {
      name: 'John',
      age: 34,
    },
  ];
}
