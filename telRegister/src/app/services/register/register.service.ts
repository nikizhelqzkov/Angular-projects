import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { IContact } from 'src/app/interfaces/IContact/Icontact';

@Injectable()
// {
//   providedIn: 'root'
// }
export class RegisterService {
  constructor() {}
  getList(): Observable<any> {
    return of(
      this.DATA.sort((r1, r2): any => {
        return r1.passportData.firstName === r2.passportData.firstName
          ? r1.passportData.lastName > r2.passportData.lastName
          : r1.passportData.firstName > r2.passportData.firstName;
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
  addRegister(data: IContact): Observable<IContact[]> {
    const idList = this.DATA.map((data) => data.id);
    const id = idList.length === 0 ? 0 : Math.max(...idList) + 1;
    const passportData = data.passportData;
    const address = data.address;
    const result:IContact = {
      id,
      telephone:data.telephone,
      passportData,
      address
    };

    this.DATA.push(result);
    return this.getList();
  }
  removeRegister(id: number): Observable<IContact[]> {
    return of(
      (this.DATA = this.DATA.filter((reg): any => {
        return reg.id != id;
      }))
    );
  }
  private tempDate = new Date();

  DATA: IContact[] = [
    {
      id: 0,
      telephone: '08986259453',
      passportData: {
        firstName: 'Aleksandar',
        lastName: 'Ivanov',
        dateOfBirth:'2000-02-05'
      },
      address: {
        country: 'Bulgaria',
        city: 'Shumen',
      },
    },
    {
      id: 1,
      telephone: '0884284325',
      passportData: {
        firstName: 'Borislav',
        lastName: 'Mihailov',
        dateOfBirth:'2002-03-05'
      },
      address: {
        country: 'Bulgaria',
        city: 'Sofia',
      },
    },
  ];
}
