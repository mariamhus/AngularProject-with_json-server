import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient:HttpClient) { }

  //URL
  private Base_URL = "http://localhost:3000/students";
  //4 Functions

  GetAllUsers(){
    return this.myClient.get(this.Base_URL,{observe:"body"});
  }

  GetUserByID(id:any){
    // return this.myClient.get(this.Base_URL+"/"+id);
    return this.myClient.get(`${this.Base_URL}/${id}`);
  }

  AddNewUser(student:any){
    return this.myClient.post(this.Base_URL+"/", student)
  }
  
  DeleteUser(id:any){
    return this.myClient.delete(this.Base_URL+"/"+id);
  }

  UpdateUser(id:any,student:any){
    return this.myClient.put(this.Base_URL+"/"+id,student)
  }
}
