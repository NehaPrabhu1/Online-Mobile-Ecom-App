import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
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
  brands: any[] = [];
  searchedKeyword: any = '';

  constructor(
    private cartService: CartService,
    private brandService: BrandService,
    private router: Router
  ) {}

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

    this.brandService.getAllBrands().subscribe((res) => (this.brands = res));
  }
}
