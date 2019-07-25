import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../models/http-response'; 
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string; 
  private currentUserId: number;

  constructor(private http: HttpClient, private navController: NavController, private userService: UserService) { }

  login(email, password) {
    this.http.post('http://localhost:5000/api/auth/login', {email: email, password: password}).subscribe((response: HttpResponse) => {
      if (response.success) { 
        this.token = response.data; 
        this.getUserId(email);
        this.navController.navigateForward('users'); 
      }
      else {
        alert(response.message); 
      }
      console.log(response);
      console.log("id" + this.currentUserId);
    });
  }

  getUserId(email) {
    this.http.get('http://localhost:5000/api/users/' + email).subscribe((response:any)=> {
      if (response.success) {
        this.currentUserId = response.data.id;
      }
    });
  }

  register(user) {
    this.http.post('http://localhost:5000/api/auth/register', user).subscribe((response: HttpResponse) => {
      if (response.success) { 
        this.token = response.data; 
        this.navController.navigateForward('users'); 
      }
      else {
        alert(response.message);  
      }
      console.log(response);
    });
  }

  getToken(): string { 
    return this.token
  }

  setTokenToEmpty() {
    this.token = ""; 
  }

}
