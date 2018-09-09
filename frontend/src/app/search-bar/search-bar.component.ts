import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from "../locations";
import { Router ,Routes } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  location:string;
  searchKey:string;
  locations=LOCATIONS;
  constructor(private router: Routes) { }

  Search(){
    console.log(this.location,this.searchKey);
  }
  ngOnInit() {
    console.log(this.locations);
    console.log("kjk");
  }

}
