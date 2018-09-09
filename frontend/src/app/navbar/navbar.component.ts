import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Services/auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //user:any;
  constructor(private authService :AuthService,
    private router : Router) { }
  isUser() {
    return this.authService.loggedIn();
    // return true;
  }
  LogOut() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  ngOnInit() {
    
  }

}
