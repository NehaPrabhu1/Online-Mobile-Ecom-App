import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  address: any = {};
  orderitems: any[] = [];
  order: any = {};
  total_payment: number = 0;
  products: any = [];
  cartItems: any = [];
  user: any = {};

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    if (this.user) {
      this.address = JSON.parse(localStorage.getItem('Address')!);

      if (!this.address) {
        this.address = this.user.address;
      }

      //orderitems details from localstorage
      this.cartService.getCartProducts().subscribe((res) => {
        this.cartItems = res;
        let i = 1;
        for (let cartItem of this.cartItems) {
          let orderitem: any = {};
          orderitem.id = i;
          orderitem.productid = cartItem.id;
          orderitem.quantity = cartItem.quantity;
          this.orderitems.push(orderitem);
          this.total_payment += cartItem.quantity * cartItem.price;
          i++;
        }
        console.log(this.orderitems);
      });

      // let i=0;
      //  for(let orderitem of this.orderitems){
      //   let id = orderitem.productid;
      //   this.productService.getProductById(id).subscribe(res =>{
      //      orderitem.totalprice = orderitem.quantity * res.price;
      //      this.total_payment = this.total_payment+orderitem.totalprice;
      //      this.products[i]=res;
      //      i++;
      //   });
      //}
    }
  }

  showMessage() {
    this.order.userid = this.user.id;

    this.order.total_payment = this.total_payment;
    this.order.delivery_address = this.address;
    this.order.orderitems = this.orderitems;

    if (this.order.payment_method == null || this.order.payment_method == '') {
      alert('Please select a payment method');
    } else {
      console.log(this.order);
      alert('Your order Placed Successfully...Thank you!');

      this.orderService.addNewOrder(this.order).subscribe((res) => {
        console.log(res);
      });
      //deleting all data from cartProducts
      for (let cartItem of this.cartItems) {
        this.cartService
          .deleteProductFromCart(cartItem.id)
          .subscribe((res) => console.log(res));
      }
      this.router.navigate(['orders']).then(() => window.location.reload());
    }

    localStorage.removeItem('Address');
    localStorage.clear();
  }
}
