import { Component, OnInit } from '@angular/core';
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

  Pid!: number
  data!: any;

  // array to post the info in cart api
  cart: cartDesc = {
    id: 0,
    name: '',
    quantity: 1,
    price: 0,
    imgUrl: '',
    size: 28,
    originalPrice: 0,
    discount: 0,
    totalAmount: 0,
    subtotal: 0
  }

  //  property to determine if item is already present in cart
  gotItem = false;

  // items present in the cart
  existingItems: any
  addToCart(i: any) {
    this.carts.getFromCart().subscribe((res) => {
      this.existingItems = res;
      //looping through the cart
      for (const m of this.existingItems) {
        this.gotItem = true;
        // if the item is already present
        if (m.name == i.title) {
          m.quantity++;
          this.carts.updateCartItem(m);//just increments the quantity in api
          alert("Item already added to the Cart");

        }
        // if not
        else {
          this.gotItem = false

        }
      }

      // new item to be added
      if (this.gotItem == false) {
        this.cart.name = i.title;
        this.cart.price = i.price;
        this.cart.quantity = this.cart.quantity;
        this.cart.originalPrice = i.originalPrice;
        this.cart.imgUrl = i.imgSrc;
        this.cart.size = this.cart.size;
        this.cart.totalAmount = 0;
        this.cart.id = i.id;
        this.cart.discount = i.offerPercent;
        this.carts.addToCart(this.cart);


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
    })




  }

  constructor(private title: Title, private sls: SchoolsListService, private carts: CartserviceService, private actroute: ActivatedRoute) {

  }

  ngOnInit(): void {

    // for receiving the id that is being passed from list component
    this.Pid = this.actroute.snapshot.params['id'];

    this.sls.getSingleProduct(this.Pid).subscribe((response) => {
      this.data = response;
      this.title.setTitle(this.data[0].title);//setting title dynamically from api
    })


  }




}
