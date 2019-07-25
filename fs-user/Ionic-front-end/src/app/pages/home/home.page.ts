import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {

email: string;
password: string;

constructor(private authenticationService: AuthenticationService, private navController: NavController) {}

login() {
  this.authenticationService.login(this.email, this.password);
}

navToUsers() {
  this.authenticationService.setTokenToEmpty();
  this.navController.navigateForward('users');
}

register() {
  this.navController.navigateForward('register');
}

populateLogin() {
  this.email = "jason.energetic@gmail.com";
  this.password = "jenergetic";
}

}
