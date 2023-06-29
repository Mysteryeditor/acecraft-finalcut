import { Component } from '@angular/core';
import { single } from 'rxjs';
import { cartDesc } from 'src/models/schools-list';
import { usersData } from 'src/models/users';
import { UsersService } from 'src/services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private auth:UsersService,private http:HttpClient,private r:Router){}
obj=new signin_Credentials();
userobj :any;
onSubmit(){
  // // this.auth.authUser(this.obj.username).subscribe((response)=>{
    
    
  // //   this.userobj=response
  // //   if(typeof(this.userobj)==undefined || this.userobj.length<0){
  // //     alert('no such user found');
  // //     return;
  // //   }

  // //   else{
  // //     if(this.userobj[0].password==this.obj.password){
  // //       this.r.navigate(['','/'])
       
  // //     }
  // //     else{
  // //    alert('wrong credentials')
  // //     }
  // //   }
 
  // // }
  // // )


   this.auth.authUser(this.obj.username).subscribe(
     (response) => {
       this.userobj = response;
       if (typeof this.userobj === 'undefined' || this.userobj.length < 1) {
         alert('No user found.');
         return;
       } else {
         if (
           this.userobj[0] &&
           this.userobj[0].password &&
           this.userobj[0].password === this.obj.password
         ) {
           this.r.navigate(['', '/']);
         } else {
           alert('Wrong credentials.');
         }
       }
     },
     (error) => {
       alert('Server error occurred. Please try again later!');
     }
   );

  
  
  
  
  
  
  
  console.log("helo");
}

}

class signin_Credentials{
  username !: string;
  password!: string;
}