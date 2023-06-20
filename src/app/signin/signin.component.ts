import { Component } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
obj=new signin_Credentials();

onSubmit(){
  console.log("helo");
}

}

class signin_Credentials{
  username !: string;
  password!: string;
}