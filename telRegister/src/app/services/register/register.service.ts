import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { IContact } from 'src/app/interfaces/Icontact';

@Injectable()
// {
//   providedIn: 'root'
// }
export class RegisterService {
  constructor() {}
  getList(): Observable<any> {
    return of(
      this.DATA.sort((r1, r2): any => {
        return r1.name > r2.name;
      })
    );
  }
  getDetail(id: any): Observable<any> {
    return of(
      this.DATA.find((data) => {
        return data.id == id;
      })
    );
  }
  addRegister(data: any): Observable<IContact[]> {
    this.DATA.push(data);
    return this.getList();
  }
  removeRegister(id: number): Observable<IContact[]> {
    return of(
      (this.DATA = this.DATA.filter((reg): any => {
        return reg.id != id;
      }))
    );
  }
  DATA:IContact[] = [
    {
      id: 0,
      name: 'John Ivanov',
      age: 34,
    },
    {
      id: 1,
      name: 'Pencho',
      age: 35,
    },
    {
      id: 2,
      name: 'Milka',
      age: 14,
    },
    {
      id: 3,
      name: 'Ivan',
      age: 16,
    },
    {
      id: 4,
      name: 'John Georgiev',
      age: 34,
    },
  ];
}
