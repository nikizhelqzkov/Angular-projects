import { Component, Input, OnInit } from '@angular/core';
import { IPassport } from 'src/app/interfaces/IContact/IPassportData';

@Component({
  selector: 'passport-details',
  templateUrl: './passport-details.component.html',
  styleUrls: ['./passport-details.component.scss']
})
export class PassportDetailsComponent implements OnInit {
@Input() info!:IPassport;
  constructor() { }

  ngOnInit(): void {

  }

}
