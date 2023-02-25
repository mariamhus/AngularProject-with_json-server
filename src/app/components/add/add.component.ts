import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private route:ActivatedRoute,private myService:DemoService , private router:Router){

  }
  Add(name:any, email:any, age:any, phone:any){
    let user = {name, age, email, phone};
    this.myService.AddNewUser(user).subscribe(()=>{
      this.router.navigateByUrl('/');
      
      });
  }
}
