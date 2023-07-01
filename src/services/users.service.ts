import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from 'src/models/users';
import { Subject } from 'rxjs';
import { cartDesc } from 'src/models/schools-list';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public authSubject = new Subject<boolean>();

  validateAuth(data:boolean) {
    //passing the data as the next observable
    this.authSubject.next(data);
  }
  
  value?:boolean;
    getAuthStatus(){
    this.authSubject.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    return this.value;
  }

  constructor(private http:HttpClient) { 

  }


  userLoggedIn: boolean = false;


// for user registration
  url:string='http://localhost:3000/users';
  postUser(info:usersData){
    return this.http.post<usersData >(this.url,info).subscribe((res)=>{})
  }

  // for user authentication
  userUrl:string=''
  authUser(email:string){
    this.userUrl=this.url+'?email_like='+email
    return this.http.get<any>(this.userUrl)
  }

  //for updating the isLogged
  updateIsloggedIn(item:any,id:number) {
    const putUrl=this.url+'/'+id
    item.isLogged=true
    return this.http.put(putUrl,item).subscribe((res)=>{})
  }

  

 

  





 
}
