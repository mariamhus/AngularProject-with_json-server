import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  students:any;
  constructor(private route:ActivatedRoute,private stdService:DemoService, private router:Router){
    this.id=this.route.snapshot.params["id"];
    console.log(this.id)

  }
  ngOnInit(){
    this.stdService.GetUserByID(this.id).subscribe((res)=>{
      this.students=res;
      console.log(this.students)
    })
  }
  updateStd(name:any,age:any,email:any,phone:any){
    this.stdService.UpdateUser(this.id,{name,age,email,phone}).subscribe(()=>{
    this.router.navigateByUrl('/');
    
    })

  }
  
}
