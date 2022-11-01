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
  public dateErr:string = ''
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.passportForm = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  //validators
  notValidPassportForm(prop:string) {
    return (
      this.passportForm.get(prop)?.touched &&
      this.passportForm.get(prop)?.errors?.['required']
    );
  }
  notValidDate(prop:string) {
    this.dateErr = this.passportForm.get(prop)?.errors?.['invalidDate']
    return (
      this.passportForm.get(prop)?.touched &&
      this.passportForm.get(prop)?.errors?.['invalidDate']
    );
  }
}
