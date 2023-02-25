import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-stddetails',
  templateUrl: './stddetails.component.html',
  styleUrls: ['./stddetails.component.css']
})
export class StddetailsComponent implements OnInit {


  ID:any;
user:any;
  constructor(myActivated:ActivatedRoute, private myService:DemoService, private router:Router){
      this.ID = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
      this.myService.GetUserByID(this.ID).subscribe(
        {
          next:(res)=>{
            this.user = res;
          },
          error:(err)=>{console.log(err)}
        }
      )
  }
  returnHomePage(){
    this.router.navigateByUrl('/');
  }
}
