import { Component,OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup!:FormGroup;
firstname!:FormControl;
lastname!:FormControl;
email!:FormControl;
password!:FormControl;
// confirmpassword!:FormControl
dealername!:FormControl;
dealernumber!:FormControl;
city!:FormControl;
state!:FormControl;
gstnumber!:FormControl;

onSubmit(){
  console.log("helo");
}

 ngOnInit(): void {
     this.firstname=new FormControl('',Validators.required);
     this.signup=new FormGroup({
      firstname:this.firstname
     })
 }



}
