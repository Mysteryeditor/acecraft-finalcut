import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { usersData } from 'src/models/users';
import { UsersService } from 'src/services/users.service';

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
  schenter!: FormControl
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

  constructor(private title: Title, private user: UsersService, private route: Router) {
    this.title.setTitle('register')
  }

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
    this.password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$')]),
      this.confirmpassword = new FormControl('', [Validators.required])
    this.schenter = new FormControl('', [Validators.required])
    this.dealername = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.dealernumber = new FormControl('', [Validators.required])
    this.city = new FormControl('', [Validators.required]),
      this.statename = new FormControl('', [Validators.required]);

    this.gstnumber = new FormControl('', Validators.required)


    this.signup = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmpassword: this.confirmpassword,
      schenter: this.schenter,
      dealername: this.dealername,
      dealernumber: this.dealernumber,
      city: this.city,
      statename: this.statename,
      gstnumber: this.gstnumber

    })
  }

  // an object to store the user details
  userInfo: usersData =
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      type: '',
      dealername: '',
      dealernumber: '',
      city: '',
      state: '',
      gstnumber: '',
      cart: [],
      isLogged: false
    }


  onSubmit() {
    // assigning the form values to object
    this.userInfo.firstName = this.firstname.value;
    this.userInfo.lastName = this.lastname.value;
    this.userInfo.email = this.email.value;
    this.userInfo.type = this.schenter.value;
    this.userInfo.password = this.password.value;
    this.userInfo.dealername = this.dealername.value;
    this.userInfo.dealernumber = this.dealernumber.value;
    this.userInfo.state = this.statename.value;
    this.userInfo.city = this.city.value;
    this.userInfo.gstnumber = this.gstnumber.value;
    // posting the details into api
    this.user.postUser(this.userInfo)

    //a popup
    Swal.fire({
      icon: 'success',
      title: 'Registered SuccessFully',
      showConfirmButton: false,
      timer: 2000
    });

    this.route.navigate(['/signin']);



  }
}
