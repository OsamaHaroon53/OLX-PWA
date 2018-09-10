import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../Services/http-services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router, private http: HttpServicesService) { }
  valid: boolean;
  msg: string;
  data:{}

  openAd(data){
    console.log(data);
  }





  ngOnInit() {
    this.valid = true;
    var url = this.router.url.slice(1);
    switch (url) {
      case "":
      case "home":
        this.http.getData('allCategory').subscribe(data => {
          if (data.success) {
            this.data=data.data;
            this.valid=false;
          }
          else {
            this.msg = data.message;
            this.valid = true;
          }
        }, error => {
          this.msg = "Error: Server Not found";
          this.valid = true;
        }
        );
        break;
      default:
        this.http.getData('category/'+url).subscribe(data => {
          if (data.success) {
            this.data=data.data;
            console.log(this.data);
            this.valid=false;
          }
          else{
            this.msg = data.message;
            this.valid = true;
          }
        }, error => {
          this.msg = error;
          this.valid = true;
        }
        );
        break;
    }
  }

}
