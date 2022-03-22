import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  constructor(private route: Router, private regService: RegisterService) {}
  pushData(data: any): any {
    this.regService.addRegister(data).subscribe((result) => {
      console.log(result);
    });
    this.route.navigate(['register']);
  }
  ngOnInit(): void {}
}
