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
confirmpassword!:FormControl
// school or enterprise radiobutton
dealername!:FormControl;
dealernumber!:FormControl;
city!:FormControl;
state!:FormControl;
statelist=[
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];








gstnumber!:FormControl;



 ngOnInit(): void {
     this.firstname=new FormControl('',Validators.required);
     this.lastname=new FormControl('',Validators.required);
     this.email=new FormControl('',[Validators.required,
    Validators.email])
    this.password=new FormControl('',[Validators.required,Validators.minLength(8)]),
    this.confirmpassword=new FormControl('',[Validators.required])
    // radiobutton
    this.dealername=new FormControl('',Validators.required);
    this.dealernumber=new FormControl('',Validators.required)
    this.city=new FormControl('',Validators.required),
    //state
   
    this.gstnumber=new FormControl('',Validators.required)


     this.signup=new FormGroup({
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      confirmpassword:this.confirmpassword,
      dealername:this.dealername,
      dealernumber:this.dealernumber,
      city:this.city,
      gstnumber:this.gstnumber

     })
 }


 onSubmit(){

  console.log("helo");
}
}
