import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';


@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.scss']
})
export class RegisterDetailsComponent implements OnInit {
  id:any;
  data:any;
  constructor(private activeRoute: ActivatedRoute, private regService:RegisterService ) { }

  ngOnInit(): void {
   this.id =  +this.activeRoute.snapshot.params['id']
   this.getDetail(this.id)
  }
  getDetail(id:number):any{
    this.regService.getDetail(id).subscribe(info=>{
      this.data = info;
    });
    console.log(this.data)
  }
}
