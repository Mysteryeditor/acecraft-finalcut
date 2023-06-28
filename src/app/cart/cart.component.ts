import { Component,OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice.service';
import { cartDesc } from 'src/models/schools-list';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartRetrival:CartserviceService,private title:Title){
    this.title.setTitle('Cart Summary');
  }
 carts:cartDesc={
   id:0,
   name:'',
   imgUrl:'',
   quantity:0,
   price:0,
   size:'',
   originalPrice:0,
   discount:0,
   totalAmount:0,
   subtotal:0
 }

display:any=[]

isHidden:boolean=true
none='block'
ngOnInit(): void {
    this.cartRetrival.getFromCart().subscribe(
      (response)=>{
        this.display=response;
       if(this.display==0){
        this.isHidden=false
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


}
