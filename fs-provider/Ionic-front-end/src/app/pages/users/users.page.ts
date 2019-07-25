import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; // user service which has our user http requests
import { User } from '../../models/user'; // user model
import { HttpResponse } from '../../models/http-response'; // class to tell our http request what the response object should look like
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] = []; // local variable - array of user objects

  deleteUser = (userToDelete) => { // call back to update local list of users on the frontend / client. Otherwise our database would update and our list on this page would still show the user
    this.users = this.users.filter(user => user.id !== userToDelete.id);
  }

  constructor(private userService: UserService, private navController: NavController) { 
    this.userService.setCallBack(this.deleteUser); // send call back function (deleteUser) to userService to allow us to call in from another page
  }

  ngOnInit() {
    console.log(this.users);
    this.userService.getUsers().subscribe((response: HttpResponse) => { // get users from api when page loads
      console.log('response');
      console.log(response);
      if (response.success) { 
        this.users = response.data; // if we get data successfully from our api we set our user local variable / object to the data response from the api
      }
      else {
        alert(response.message); // display error from our http request to the api
      }
    });;
  }

  navToUserUpdate(user: User) {
    this.userService.setUserToUpdate(user); // set user to update in UserService - we will read this in our update user page
    this.navController.navigateForward('update-user') // navigate to our user update page
  }

}
