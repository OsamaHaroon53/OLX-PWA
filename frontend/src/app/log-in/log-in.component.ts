import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import {Router} from '@angular/router';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userModel=new Model(null,"");
  public valid:boolean;
  public msg:String;
  constructor(private http : HttpServicesService,private router :Router,private authService :AuthService) {
    
  }

  logIn(){
    
    this.http.addData('signin',this.userModel).subscribe(data=>{
      if(data.success){
        this.authService.storeUserData(data.token, data.data.name);
        console.log(data.data,data.data.name)
        this.router.navigate(["/posting"]);
      }
      else{
        this.msg=data.message;
        this.valid=true;
      }
    },error=>{
      console.log(error);
      this.msg="Error: Server Not found";
      this.valid = true;
    });
  
  }
  ngOnInit() {
    this.valid=false;
    
  }
  

}
class Model{
  constructor(
    public contact_No:number,
    public password:string
){}
}
