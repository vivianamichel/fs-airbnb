import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/user'; 
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../models/http-response'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userToUpdate: User; 
  private callBack: Function; 
 
  
  httpOptions: { 
    headers: HttpHeaders
  };

  constructor(private http: HttpClient, private navController: NavController) {
    
  }



  getUsers(): any { 
    return this.http.get('http://localhost:5000/api/users', this.httpOptions); 
  }

  setUserToUpdate(user: User) {
    this.userToUpdate = user;
  }

  getUserToUpdate(): User {
    return this.userToUpdate; 
  }

  setCallBack(callback: Function) {
    this.callBack = callback; 
  }
  invokeCallBack(user) {
    this.callBack(user); 
  }

  deleteUser(user: User) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer ' + this.authenticationService.getToken() 
    //   })
    // };
    this.http.post('http://localhost:5000/api/users/delete/' + user.id, {userId: user.id}, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { 
        this.navController.navigateForward('users'); 
      }
      else {
        alert(response.message); 
      }
      console.log(response);
    });
  }

  updateUser(user: User) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer ' + ""// this.authenticationService.getToken() 
    //   })
    // };
    this.http.post('http://localhost:5000/api/users/update', user ,this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { 
        this.navController.navigateForward('users'); 
      }
      else {
        alert(response.message); 
      }
      console.log(response);
    });
  }

}
