import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'passport-group',
  templateUrl: './passport-group.component.html',
  styleUrls: ['./passport-group.component.scss'],
})
export class PassportGroupComponent implements OnInit {
  @Input() formGroupName!: string;
  public passportForm!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.passportForm = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  //validators
  notValidFirstName() {
    return (
      this.passportForm.get('firstName')?.touched &&
      this.passportForm.get('firstName')?.errors?.['required']
    );
  }
  notValidLastName() {
    return (
      this.passportForm.get('lastName')?.touched &&
      this.passportForm.get('lastName')?.errors?.['required']
    );
  }
  notValidDate() {
    return (
      this.passportForm.get('dateOfBirth')?.touched &&
      this.passportForm.get('dateOfBirth')?.errors?.['required']
    );
  }
}
