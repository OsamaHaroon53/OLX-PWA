import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import { Router } from '@angular/router';
import { LOCATIONS } from "../locations";
import { AuthService } from "../Services/auth.service";
import { Post } from "../post";
@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  model=new Post("",null,"","","",null,"");
  valid: boolean;
  valid1: boolean;
  msg: string;
  locations=LOCATIONS;
  selected: File;
  
  constructor(private http: HttpServicesService,private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.valid=false;
  }
  imageValidation(){
    return !this.valid;
  }
  onFileChanged(event) {
    const file = event.target.files[0];
    if(file == undefined){
      return;
    }
    if(file.type != "image/png"){
      this.valid=true;
      return;
    }
    this.valid=false;
    this.selected=file;
    console.log(file);
  }

  

  Posting() {
    const formData = new FormData();

    formData.append('category',this.model.category);
    formData.append('contact_No',this.model.contact_No.toString());
    formData.append('description',this.model.description);
    formData.append('location',this.model.location);
    formData.append('name',this.model.name);
    formData.append('price',this.model.price.toString());
    formData.append('title',this.model.title);

    formData.append('user',this.auth.user1);
    formData.append('image', this.selected, this.selected.name);
    //console.log(this.model.file);
    this.http.addPicData('posting',formData).subscribe(data => {
      if (data.success) {
        this.router.navigate(["/home"]);
      }
      else {
        this.msg = data.message;;
        this.valid1 = false;
      }

    },error=>{
      this.msg = "Error: Server Not found";
        this.valid1 = true;
    }
  );
  }


}

