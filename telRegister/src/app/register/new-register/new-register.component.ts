import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/IContact/Icontact';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  public registerForm!:FormGroup;
  constructor(private route: Router, private regService: RegisterService,
   private fb:FormBuilder) {}
   private tempDate = new Date();
   ngOnInit(): void {
     this.registerForm = this.fb.group({
       telephone:'',
       passportData:this.fb.group({
         firstName:'',
         lastName: '',
         dateOfBirth:`${this.tempDate.getFullYear()}-${this.tempDate.getMonth()+1}-${this.tempDate.getDate()}`,
       }),
       address:this.fb.group({
         country:'',
         city:''
       })
     })
   }

   // methods
  pushData(data: IContact): void {
    console.log(data);
    this.regService.addRegister(data).subscribe((result) => {
      console.log(result);
    });
    this.route.navigate(['register']);
  }
}
