import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user1: any;
  myRawToken: string = "id_token";

  constructor() { }

  storeUserData(token, user) {
    localStorage.setItem(this.myRawToken, token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user1 = user;
  }

  logout() {
    this.authToken = null;
    this.user1 = null;
    localStorage.clear();
  }
  getToken() {
    return localStorage.getItem(this.myRawToken);
  }

  loggedIn() {
    const helper = new JwtHelperService();
    var token=localStorage.getItem(this.myRawToken);
    if(token!=null){
      return helper.isTokenExpired(token);
    }
    return false;
  }

}
