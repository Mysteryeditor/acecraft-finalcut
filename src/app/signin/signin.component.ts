import { Component } from '@angular/core';
import { usersData } from 'src/models/users';
import { UsersService } from 'src/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private auth:UsersService,private r:Router){}
obj=new signin_Credentials();
userobj :any;
onSubmit(){
     this.auth.authUser(this.obj.username).subscribe(
     (response) => {
       this.userobj = response;
       if (typeof this.userobj === 'undefined' || this.userobj.length < 1)//if the server status is 404
        {
         alert('invalid email');
         this.auth.validateAuth(false);
         return;
       } else {
         if (this.userobj[0].password === this.obj.password) {
          this.auth.validateAuth(true);
          
           this.r.navigate(['', '/']);
           
         } else {
           alert('invalid password');
           this.auth.validateAuth(false);
         }
       }
     }
   );
}

}

class signin_Credentials{
  username !: string;
  password!: string;
}