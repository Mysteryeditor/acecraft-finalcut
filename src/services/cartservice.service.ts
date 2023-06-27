import { Injectable } from '@angular/core';
import { cartDesc } from 'src/models/schools-list';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  url:string='';
  cartUrl='http://localhost:3000/cart'

  constructor(private http:HttpClient) {
    this.url=this.cartUrl;  
   }

   addToCart(product:cartDesc){
    this.http.post<cartDesc>(this.cartUrl,product).subscribe((data)=>{
      console.log("added to the cart"+data);
    })
   }
}
