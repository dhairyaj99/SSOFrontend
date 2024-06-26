import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfo: any;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/azure';
  }

  handleLoginCallback() {
    this.http.get('http://localhost:8080/user').subscribe(
      (user) => {
        this.userInfo = user;
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error during login callback:', error);
      }
    );
  }

  getUserInfo() {
    return this.userInfo;
  }

  logout() {
    this.userInfo = null;
    this.router.navigate(['/']);
  }
}
