import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from 'src/models/users';
import { Subject } from 'rxjs';
import { cartDesc } from 'src/models/schools-list';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Router } from '@angular/router';

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

  constructor(private http:HttpClient,private route:Router) { 

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

  loginEmail:string=''

  // for the logout

  // getting the data of the user who is active
  getActiveUser(){
    const activeUrl=this.url+'?isLogged=true'
    console.log(activeUrl);
    return this.http.get<any>(activeUrl);
  }

  activeUser:any//data of active user

  // to put back the updated data
  logOutUser(){
    this.getActiveUser().subscribe((res)=>{
      this.activeUser=res
      const activeUrl=this.url+'/'+this.activeUser[0].id;
      this.activeUser[0].isLogged=false;
      this.route.navigate(['/']);
      return this.http.put(activeUrl,this.activeUser[0]).subscribe();
      
    })

  }

  

 

  





 
}
