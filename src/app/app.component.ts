import {Component} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isSignedIn() {
    return this.authenticationService.isSignedIn();
  }

  userName() {
    const user = this.authenticationService.currentUser;
    return user.subscribe(user => {
      return user.firstName + ' ' + user.lastName;
    })
  }
}


