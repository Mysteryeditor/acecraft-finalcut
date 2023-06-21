import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup!: FormGroup;
  firstname!: FormControl;
  lastname!: FormControl;
  email!: FormControl;
  password!: FormControl;
  confirmpassword!: FormControl
  schenter!:FormControl
  dealername!: FormControl;
  dealernumber!: FormControl;
  city!: FormControl;
  statename!: FormControl;
  statelist = [
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








  gstnumber!: FormControl;



  ngOnInit(): void {
    this.firstname = new FormControl('', [Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(20),
    Validators.minLength(3)
    ]);
    this.lastname = new FormControl('', [Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(20),
    Validators.minLength(3)
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email])//pattern
    this.password=new FormControl('',[Validators.required,Validators.minLength(8)]),//pattern
    // this.confirmpassword=new FormControl('',[Validators.required])
    this.schenter=new FormControl('',[Validators.required])
    this.dealername=new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.dealernumber=new FormControl('',[Validators.required])
    this.city=new FormControl('',[Validators.required]),
    this.statename=new FormControl('',[Validators.required]);

    this.gstnumber=new FormControl('',Validators.required)


    this.signup = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password:this.password,
      // confirmpassword:this.confirmpassword,
      schenter:this.schenter,
       dealername:this.dealername,
      dealernumber:this.dealernumber,
      city:this.city,
      statename:this.statename,
      gstnumber:this.gstnumber

    })
  }


  onSubmit() {
    Swal.fire({
      icon:'success',
      title:'Registered SuccessFully',
      showConfirmButton:false,
      timer:2000
    });
    console.log("helo");
  }
}
