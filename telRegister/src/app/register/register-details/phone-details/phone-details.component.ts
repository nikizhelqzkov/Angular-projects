import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.scss'],
})
export class PhoneDetailsComponent implements OnInit {
  @Input() phoneNumber: string = '';
  constructor() {}

  ngOnInit(): void {}
}
