import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import { Router } from '@angular/router';
import { User } from '../user';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  public valid: boolean;
  public remember1: boolean;
  public msg: string;

  userModel = new User("","","","",null);

  constructor(private http: HttpServicesService, private router: Router,private authService :AuthService) { }

  passwordMatch(){
    if(this.userModel.confirm_Password==this.userModel.password){
      return true;
    }
    return false;
  }
  signUp(){
    
          this.http.addData('signup', this.userModel).subscribe(data => {
            if (data.success) {
              this.authService.storeUserData(data.token , data.data.name);
              this.router.navigate(["/posting"]);
            }
            else {
              this.msg = data.message;
              this.valid = true;
            }
          },error=>{
            this.msg="Error: Server Not found";
            this.valid = true;
          }
        );

        
  }
  ngOnInit() {
    this.valid=false;
    this.remember1=false;
  }

}
