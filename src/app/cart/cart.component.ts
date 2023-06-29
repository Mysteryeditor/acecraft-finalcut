import { Component,OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice.service';
import { cartDesc } from 'src/models/schools-list';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartRetrival:CartserviceService,private title:Title){
    this.title.setTitle('Cart Summary');
  }

display:any=[]

isHidden:boolean=true
none='block'
ngOnInit(): void {

  //for the retrieval of the data
    this.cartRetrival.getFromCart().subscribe(
      (response)=>{
        this.display=response;
       if(this.display==0){
        this.isHidden=false//for hiding the default message
        this.none="none"
        console.log(this.isHidden);
       }
        console.log(this.display);
      }
    )
}


delete(deleteItem:cartDesc){
  this.cartRetrival.removeFromCart(deleteItem).subscribe(
    ()=>console.log('deleted')
  );
  this.ngOnInit();

}

// for the quantity increment
incrementQuantity(item:cartDesc){
  item.quantity++;
  this.cartRetrival.updateCartItem(item);

}

// for the quantity decrement
decrementQuantity(item:cartDesc){
  if(item.quantity==1){
    this.delete(item);
  }
  item.quantity--;
  this.cartRetrival.updateCartItem(item);
}

cartDetails:any=[];

// for the total price
priceTotal(display:any){
  const iniValue=0;
  this.cartDetails=display;
  const a=this.cartDetails.reduce((sum:any,item:any)=>sum+(item.price * item.quantity),iniValue);
  return a;
}
}
