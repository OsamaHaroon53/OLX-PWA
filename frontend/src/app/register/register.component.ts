import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import { Router } from '@angular/router';
import { isUndefined } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name: String;
  public password: String;
  public confirm_Password: String;
  public email: String;
  public contact_No: Number;
  public valid: boolean;
  public msg: String;

  constructor(private http: HttpServicesService, private router: Router) { }

  signUp(){
    console.log(this.name, this.password, this.confirm_Password, this.email, this.contact_No);
    console.log(String(this.contact_No).length === 10,this.name !== "" , this.password !== "" , this.confirm_Password !== "", this.email !== "", !isUndefined(this.contact_No));
    if (this.name !== "" && this.password !== "" && this.confirm_Password !== "" && this.email !== "" && this.contact_No !=null && 
    !isUndefined(this.contact_No) && !isUndefined(this.name) && !isUndefined(this.confirm_Password) && !isUndefined(this.password) && !isUndefined(this.email) ){
      if (String(this.contact_No).length === 10) {
        console.log(this.password,this.confirm_Password)
        if (this.password == this.confirm_Password) {
          let register = {
            name: this.name,
            password: this.password,
            email: this.email,
            contact_No: this.contact_No
          }
          this.http.addData('signup', register).subscribe(data => {
            if (data.sucess) {
              this.router.navigate(["/posting"]);
            }
            else {
              this.msg = "Contact_No or Password incorrect  ";
              this.valid = true;
            }
          });
        }
        else {
          this.msg = "Password not match  ";
          this.valid = true;
        }
      }
      else {
        this.msg = "Contact_No should be 10 digits  ";
        this.valid = true;
      }
    }
    else {
      this.msg = "Fields are empty  ";
      this.valid = true;
    }
  }
  ngOnInit() {
    this.valid = false;
  }

}
