import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "./_model/User";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  login(username: string, password: string) {
    return this.http.post<any>(`api/users/signin`, {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        console.debug('msg: login successful if there\'s a jwt token in the response ', user);
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));

  }

  public isSignedIn() {
    return this.currentUserSubject.getValue() ? true : false;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
