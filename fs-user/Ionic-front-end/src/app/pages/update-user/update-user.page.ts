import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { User } from '../../models/user'; 

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  constructor(private userService: UserService) { }

  user: User = new User();;

  ngOnInit() { 
    this.user = this.userService.getUserToUpdate(); 
  }
  update() {
    this.userService.updateUser(this.user); 
  }

  delete() {
    this.userService.invokeCallBack(this.user);  
    this.userService.deleteUser(this.user); 
  }

}
