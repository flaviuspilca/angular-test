import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }
      public get currentUserValue() {
        return this.currentUserSubject.value;
      }

      login(username, password) {
      //commenting the below because of lack of login endpoint
        /*return this.http.post<any>(some_login_endpoint, { username, password })
          .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }));*/

        return(username)
      }

  logout() {
console.log(this)
    this.username = '';
    this.password = '';
 }
}
