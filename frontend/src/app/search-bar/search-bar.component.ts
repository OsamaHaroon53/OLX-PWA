import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from "../locations";
import { Router } from "@angular/router";
import { HttpServicesService } from "../Services/http-services.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  location: string;
  searchKey: string;
  valid: boolean;
  msg: string;
  data:{};
  locations = LOCATIONS;
  constructor(private router: Router, private http: HttpServicesService) {
  }

  Search() {
    console.log(this.location, this.searchKey);
  }
  ngOnInit() {
    var url = this.router.url.slice(1);
    // console.log(url);
    // switch (url) {
    //   case "":
    //   case "home":
    //     this.http.getData('allCategory').subscribe(data => {
    //       if (data.success) {
    //         this.data=data.data;
    //       }
    //       else {
    //         this.msg = data.message;
    //         this.valid = true;
    //       }
    //     }, error => {
    //       this.msg = "Error: Server Not found";
    //       this.valid = true;
    //     }
    //     );
    //     break;
    //   default:
    //   this.http.getData('allCategory').subscribe(data => {
    //     if (data.success) {
    //       this.data=data.data;
    //     }
    //     else {
    //       this.msg = data.message;
    //       this.valid = true;
    //     }
    //   }, error => {
    //     this.msg = "Error: Server Not found";
    //     this.valid = true;
    //   }
    //   );
    //     break;
    // }

  }

}
