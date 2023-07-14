import { Component } from '@angular/core';
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

  constructor(private auth: UsersService, private r: Router, private title: Title) {
    this.title.setTitle('login')
  }
  obj = new signin_Credentials();
  userobj: any;
  userid!: number
  onSubmit() {
    this.auth.authUser(this.obj.email).subscribe(
      (response) => {
        this.userobj = response;
        if (typeof this.userobj === 'undefined' || this.userobj.length < 1)//checking if the server status is 404 ie.invalid email
        {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
          });

          Toast.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please check the email'
          });
          this.auth.validateAuth(false);//the subject value is set to false
          return;
        } else {
          if (this.userobj[0].password === this.obj.password) //if authentication is successful 
          {
            this.auth.validateAuth(true);//subject=true
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

            // to change the islogged property to true in the api
            this.userid = this.userobj[0].id;
            this.auth.updateIsloggedIn(this.userobj[0], this.userid);
            this.r.navigate(['/']);
          }
          else //if the authentication failed(wrong password)
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
            this.auth.validateAuth(false);//subject=false
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