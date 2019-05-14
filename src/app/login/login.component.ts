import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {first} from "rxjs/internal/operators/first";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private loading: boolean;
  returnUrl: string;
  private error = '';
  username: string;
  password: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {
  }


  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {
    this.authenticationService.login('admin', 'admin').pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('error');

          this.error = error;
          this.loading = false;
        });
  }

}
