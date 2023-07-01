import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolsListService } from 'src/services/schools-list.service';
import { CartserviceService } from 'src/services/cartservice.service';
import { Title } from '@angular/platform-browser';
// for the cart description
import { cartDesc } from 'src/models/schools-list';
import Swal from 'sweetalert2';
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
  quantity:1,
  price:0,
  imgUrl:'',
  size:28,
  originalPrice:0,
  discount:0,
  totalAmount:0,
  subtotal:0
 }

//  quantity:number=1
//  size:any=''

 addToCart(i:any){
  this.cart.name=i.title;
  this.cart.price=i.price;
  this.cart.quantity=this.cart.quantity;
  this.cart.originalPrice=i.originalPrice;
  this.cart.imgUrl=i.imgSrc;
  this.cart.size=this.cart.size;
  this.cart.totalAmount=0;
  this.cart.id=i.id;
  this.cart.discount=i.offerPercent;
  this.carts.addToCart(this.cart);
  console.log(i.id);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
   
  })

  Toast.fire({
    icon: 'success',
    title: 'Item added successfully'
  })

  

 }

  constructor(private title:Title,private sls:SchoolsListService,private carts:CartserviceService,private router:Router,private actroute:ActivatedRoute){
    
  }

  ngOnInit(): void {

    // for displaying the corresponding product 
      this.Pid=this.actroute.snapshot.params['id'];

      this.sls.getSingleProduct(this.Pid).subscribe((response)=>{
        this.data=response;
        console.log(this.data);
        this.title.setTitle(this.data[0].title);
      })

      
  }




}
