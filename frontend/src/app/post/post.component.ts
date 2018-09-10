import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServicesService } from "../Services/http-services.service";
import { Post } from "../post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  valid: boolean;
  msg: string;
  data = new Post("", null, "", "", "", null, "");
  Date: String;

  constructor(private route: ActivatedRoute, private http: HttpServicesService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.http.getData('post/' + id).subscribe(data => {
      if (data.success) {
        this.Date = data.data.date;
        this.data.category = data.data.category;
        this.data.contact_No = data.data.contact_No;
        this.data.description = data.data.description;
        this.data.location = data.data.location;
        this.data.name = data.data.name;
        this.data.price = data.data.price;
        this.data.title = data.data.title;
        this.valid = false;
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
  }

}
