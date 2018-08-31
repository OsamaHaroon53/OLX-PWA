import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import {Router} from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public password:String;
  public contact_No:Number;
  public valid:boolean;
  public msg:String;
  constructor(private http : HttpServicesService,private router :Router) {
    
  }

  logIn(){
    console.log(this.password,String(this.contact_No).length);
    if(this.password!=="" && String(this.contact_No).length===10 && !isUndefined(this.contact_No)){
    this.http.addData('signin',{contact_No:this.contact_No,password:this.password}).subscribe(data=>{
      if(data.sucess){
        this.router.navigate(["/posting"]);
      }
      else{
        this.msg="Contact_No or Password incorrect  ";
        this.valid=true;
      }
    });
  }
  else{
    this.msg="Contact_No should be 10 Digits or Fields are empty  ";
    this.valid=true;
  }
  }
  ngOnInit() {
    this.valid=false;
    
  }

}
