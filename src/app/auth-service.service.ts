import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated():boolean {
    const token = localStorage.getItem('user_token');

    return !this.jwtHelper.isTokenExpired(token);
  }


  public login(){
    
  }

  public register(){
    
  }
}
