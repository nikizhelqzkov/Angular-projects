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
}
