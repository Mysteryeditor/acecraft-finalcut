import { Component, OnInit } from '@angular/core';
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

  constructor(private cartRetrival: CartserviceService, private title: Title) {
    this.title.setTitle('Cart Summary');
  }

  display: any = []

  isHidden: boolean = true
  none = 'block';//if cart is not empty

  // for the quantity increment
  incrementQuantity(item: cartDesc) {
    item.quantity++;
    this.cartRetrival.updateCartItem(item);

  }

  // for the quantity decrement
  decrementQuantity(item: cartDesc) {
    if (item.quantity == 1) {
      this.delete(item);
    }
    item.quantity--;
    this.cartRetrival.updateCartItem(item);
  }

  cartDetails: any = [];

  // for the total price
  priceTotal(display: any) {
    const iniValue = 0;
    this.cartDetails = display;
    const a = this.cartDetails.reduce((sum: any, item: any) => sum + (item.price * item.quantity), iniValue);
    return a;
  }


  ngOnInit(): void {

    // the payment integration
    this.invokeStripe();

    //for the retrieval of the data
    this.cartRetrival.getFromCart().subscribe(
      (response) => {
        this.display = response;
        if (this.display == 0) {
          this.isHidden = false//for hiding the default message
          this.none = "none";//if no item in cart the display is none
        }
      }
    )
  }

  // deleting an item from cart
  delete(deleteItem: cartDesc) {
    this.cartRetrival.removeFromCart(deleteItem).subscribe();
    this.ngOnInit();//to reload the component

  }

  paymentHandler: any = null;
  makePayment(amount: any) {
    //makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NQj1gSJPUug7wQLCbKOg19Zaq5VwDZczScr9d5ZL4hp6nVjDeCDuQhiKsDPOSjsdgh8dbmWc6jrVrFGkzCHj6ZP00bX37hrwW',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        //alert('Stripe token generated!');
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'success',
          title: 'Order Placed Successfully',
        });
      },
    });
    paymentHandler.open({
      name: 'Uniforms',
      description: 'Order Summary',
      amount: amount,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: 'error',
              title: 'Error in generating Stripe Payment Gateway',
            });
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }


}
