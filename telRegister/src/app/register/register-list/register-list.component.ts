import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss'],
})
export class RegisterListComponent implements OnInit {
  public list: any;
  constructor(private regService: RegisterService) {}

  ngOnInit(): void {
    this.getRegisterList();
  }
  getRegisterList(): any {
    this.regService.getList().subscribe((data) => {
      this.list = data;
    });
  }
}
