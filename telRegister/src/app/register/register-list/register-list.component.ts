import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/IContact/Icontact';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss'],
})
export class RegisterListComponent implements OnInit {
  public list!: any;
  constructor(public route: Router, private regService: RegisterService) {}

  ngOnInit(): void {
    this.getRegisterList();
  }
  getRegisterList(): any {
    this.regService.getList().subscribe((data) => {
      this.list = data;
    });
  }
  newRegister() {
    this.route.navigate(['register/add']);
  }
  removeRegister(id: number) {
    this.regService.removeRegister(id).subscribe((response: any) => {
      this.list = response;
    });
  }
  hasBirthday(date: Date): boolean {
    if (!this.list) {
      return false;
    }
    const dateOfReg = new Date(date);
    const dateNow = new Date();
    const [yearNow, monthNow, dayNow] = [
      dateNow.getFullYear(),
      dateNow.getMonth() + 1,
      dateNow.getDate(),
    ];
    const [year, month, day] = [
      dateOfReg.getFullYear(),
      dateOfReg.getMonth() + 1,
      dateOfReg.getDate(),
    ];

    return monthNow === month && dayNow === day;
  }
}
