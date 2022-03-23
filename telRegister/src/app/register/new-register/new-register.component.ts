import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/IContact/Icontact';
import { IPassport } from 'src/app/interfaces/IContact/IPassportData';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  public registerForm!:FormGroup;
  // public firstName: string = '';
  // public lastName: string = '';
  // public tel :any;
  // public passportData:IPassport = {
  //   firstName:'',
  //   lastName:''
  // }

  constructor(private route: Router, private regService: RegisterService,
   private fb:FormBuilder) {}
  pushData(data: any): void {
    console.log(data);
    this.regService.addRegister(data).subscribe((result) => {
      console.log(result);
    });
    this.route.navigate(['register']);
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      passportData:this.fb.group({
        firstName:'',
        lastName: ''
      })
    })
  }
}
