import { Component } from '@angular/core';
import { usersData } from 'src/models/users';
import { UsersService } from 'src/services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private auth: UsersService, private r: Router,private title:Title) { 
    this.title.setTitle('login')
  }
  obj = new signin_Credentials();
  userobj: any;
  userid!:number
  onSubmit() {
    this.auth.authUser(this.obj.email).subscribe(
      (response) => {
        this.userobj = response;
        if (typeof this.userobj === 'undefined' || this.userobj.length < 1)//if the server status is 404
        {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          Toast.fire({
            icon: 'error',
            title: 'Invalid Email',
            text:'Please check the email'
          });
          this.auth.validateAuth(false);
          return;
        } else {
          if (this.userobj[0].password === this.obj.password) //if authentication is successful ie.invalid email
           {
            this.auth.validateAuth(true);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,

            });
            Toast.fire({
              icon: 'success',
              title: 'Welcome Back',
            });
            this.userid=this.userobj[0].id;
            this.auth.updateIsloggedIn(this.userobj[0],this.userid);
           console.log(this.userobj[0])
            this.r.navigate([ '/']);
          } 
          else //if the authentication failed
           {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,

            });

            Toast.fire({
              icon: 'error',
              title: 'Password is Wrong',
            });
            this.auth.validateAuth(false);
          }
        }
      }
    );
  }

}

class signin_Credentials {
  email !: string;
  password!: string;
}