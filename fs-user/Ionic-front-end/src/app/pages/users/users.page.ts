import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { User } from '../../models/user'; 
import { HttpResponse } from '../../models/http-response'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[]; 

  deleteUser = (userToDelete) => { 
    this.users = this.users.filter(user => user.id !== userToDelete.id);
  }

  constructor(private userService: UserService, private navController: NavController) { 
    this.userService.setCallBack(this.deleteUser);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((response: HttpResponse) => { 
      console.log(response);
      if (response.success) { 
        this.users = response.data; 
      }
      else {
        alert(response.message); 
      }
    });;
  }

  navToUserUpdate(user: User) {
    this.userService.setUserToUpdate(user); 
    this.navController.navigateForward('update-user') 
  }

}
