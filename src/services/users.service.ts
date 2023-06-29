import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from 'src/models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

// for user registration
  url:string='http://localhost:3000/users';
  postUser(info:usersData){
    return this.http.post<usersData >(this.url,info).subscribe((res)=>{})
  }

  // for user authentication
  authUser(){
    
  }
}
