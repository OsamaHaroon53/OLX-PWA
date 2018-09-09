import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import { Router } from '@angular/router';
import { LOCATIONS } from "../locations";

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  model=new Model("",null,"","","",null,"");
  valid: boolean;
  msg: string;
  locations=LOCATIONS;
  constructor(private http: HttpServicesService, private router: Router) { }

  ngOnInit() {
    this.valid=false;
  }
  imageValidation(){
    return !this.valid;
  }
  onFileChanged(event) {
    // if(event.target)
    const file = event.target.files[0];
    if(file == undefined){
      return;
    }
    if(file.type != "image/png"){
      this.valid=true;
      return;
    }
    this.valid=false;
    this.model['file']=file;
    console.log(this.model);
  }
  Posting() {
    console.log(this.model);
  //   this.http.addData('signup',this.model).subscribe(data => {
  //     if (data.success) {
  //       this.router.navigate(["/home"]);
  //     }
  //     else {
  //       this.msg = data.message;
  //       this.valid = true;
  //     }
  //   },error=>{
  //     this.msg = "Error: Server Not found";
  //       this.valid = true;
  //   }
  // );
  }


}
class Model{
  constructor(
    title: string,
    file: File,
    category: string,
    description: string,
    name: string,
    contact_No: number,
    location: string
  ) { }
}
