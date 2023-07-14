import { Component,OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(private user:UsersService){}

  ngOnInit(): void {
   
  }

}
