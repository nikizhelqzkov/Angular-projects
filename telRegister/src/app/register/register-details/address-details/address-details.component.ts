import { Component, Input, OnInit } from '@angular/core';
import { IAddress } from 'src/app/interfaces/Contact/IAddress';

@Component({
  selector: 'address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  @Input() address!: IAddress;
  constructor() {}

  ngOnInit(): void {}
}
