import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: any = [];
  brandList: any[] = [];
  productService: ProductService;
  searchedKeyword!: string;
  id: any;
  brandid: any;
  user: any = {};

  constructor(
    productService: ProductService,
    private brandService: BrandService,
    private router: Router,
    private cartService: CartService
  ) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllBrand();
    this.getAllBrand();
    this.user = JSON.parse(sessionStorage.getItem('user')!);
  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        this.productList = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getAllBrand() {
    this.brandService.getAllBrands().subscribe((response: any) => {
      this.brandList = response;
      console.log(response);
    });
  }

  getProductByBrands(id: any) {
    //this.id = this.activeroute.snapshot.paramMap.get('id');
    if (id == '0') {
      this.getAllProduct();
    } else {
      this.productService
        .getProductByBrand(id)
        .subscribe((res) => (this.productList = res));
    }
  }

  addProductToCart(product: any) {
    if (this.user) {
      console.log(product);
      product.quantity = 1;
      product.userid = this.user.id;
      this.cartService.postProductToCart(product).subscribe((res) => {
        alert('Product added to cart');
      });
    } else {
      alert('Login first !!!');
      this.router.navigate(['/login']);
    }
  }
}
