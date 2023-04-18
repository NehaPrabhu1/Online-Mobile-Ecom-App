import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isAdmin: boolean = false;
  user: any = {};
  isloggedin: boolean = false;
  cartItems: any = {};
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    if (this.user) {
      this.isloggedin = true;
    } else {
      this.isloggedin = false;
    }

    this.cartService.getCartProducts().subscribe((res) => {
      this.cartItems = res;
      this.cartCount = this.cartItems.length;
    });
  }
}
