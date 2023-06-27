import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolsListService } from 'src/services/schools-list.service';
import { CartserviceService } from 'src/services/cartservice.service';
// for the cart description
import { cartDesc } from 'src/models/schools-list';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Pid!:number
  data!:any;
  
 cart:cartDesc={
  id:0,
  name:'',
  quantity:0,
  price:0,
  imgUrl:'',
  size:'',
  originalPrice:0,
  discount:0,
  totalAmount:0,
  subtotal:0
 }

 quantity:number=1

 addToCart(i:any){
  this.cart.name=i.name;
  this.cart.price=i.price;
  this.cart.quantity=this.quantity;
  this.cart.originalPrice=i.originalPrice;
  this.cart.imgUrl=i.imgSrc;
  this.cart.size=i.size;
  this.cart.totalAmount=0;
  this.cart.id=i.id;
  this.carts.addToCart(this.cart);
  console.log(i.id);

  

 }

  constructor(private sls:SchoolsListService,private carts:CartserviceService,private router:Router,private actroute:ActivatedRoute){}

  ngOnInit(): void {
      this.Pid=this.actroute.snapshot.params['id'];

      this.sls.getSingleProduct(this.Pid).subscribe((response)=>{
        this.data=response;
        console.log(this.data);
      })
  }


}
