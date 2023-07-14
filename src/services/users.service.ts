import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from 'src/models/users';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // for the user status
  public authSubject = new Subject<boolean>();

  //manipulation of the subject
  validateAuth(state: boolean) {
    this.authSubject.next(state);
  }

  // setting a value based on subject
  status?: boolean;
  getAuthStatus() {
    this.authSubject.subscribe(
      res => {
        this.status = res;
      }
    );
    return this.status;
  }

  constructor(private http: HttpClient, private route: Router) { }

  userLoggedIn: boolean = false;



  // for user registration
  url = environment.userapi;
  postUser(info: usersData) {
    return this.http.post<usersData>(this.url, info).subscribe()
  }

  // for user authentication
  userUrl: string = ''
  authUser(email: string) {
    this.userUrl = this.url + '?email_like=' + email
    return this.http.get<any>(this.userUrl)
  }

  //for updating the isLogged
  updateIsloggedIn(item: any, id: number) {
    const putUrl = this.url + '/' + id
    item.isLogged = true
    return this.http.put(putUrl, item).subscribe((res) => { })
  }

  // for the logout

  // getting the data of the user who is active
  getActiveUser() {
    const activeUrl = this.url + '?isLogged=true'
    return this.http.get<any>(activeUrl);
  }

  activeUser: any//data of active user

  // to put back the updated data
  logOutUser() {
    this.getActiveUser().subscribe((res) => {
      this.activeUser = res
      const activeUrl = this.url + '/' + this.activeUser[0].id;
      this.activeUser[0].isLogged = false;
      this.route.navigate(['/']);
      return this.http.put(activeUrl, this.activeUser[0]).subscribe();

    })

  }












}
