import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor (public myservice:DemoService, private router:Router){

  }
  students:any;
  ngOnInit(): void {
    setTimeout( ()=>{this.myservice.GetAllUsers().subscribe({
      next:(res)=>{
        this.students=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })},1000)
  }
  delete(id:any){
    this.myservice.DeleteUser(id).subscribe();
    this.router.navigateByUrl("/std",{skipLocationChange:true}).then(()=>{this.router.navigateByUrl("/")})
  }

}
