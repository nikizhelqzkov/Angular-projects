import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/Contact/Icontact';
import { RegisterService } from 'src/app/services/register/register.service';
import { ValidateDateOfBirth } from 'src/shared/validations/dateValidator';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  private telPattern: RegExp =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  constructor(
    private route: Router,
    private regService: RegisterService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      telephone: ['', [Validators.required, Validators.pattern(this.telPattern)]],
      passportData: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required,ValidateDateOfBirth]], //< dateNow
      }),
      address: this.fb.group({
        country: '',
        city: '',
      }),
    });
  }

  // methods
  pushData(data: IContact): void {
    this.regService.addRegister(data).subscribe((result) => {
      this.route.navigate(['register']);
    });
  }
  //Validators
  notValidTel() {
    return (
      this.registerForm.get('telephone')?.errors &&
      (this.registerForm.get('telephone')?.touched ||
        this.registerForm.get('telephone')?.dirty) &&
      !this.notValidTelReqired()
    );
  }
  notValidTelReqired() {
    return (
      this.registerForm.get('telephone')?.touched &&
      this.registerForm.get('telephone')?.errors?.['required']
    );
  }
}
