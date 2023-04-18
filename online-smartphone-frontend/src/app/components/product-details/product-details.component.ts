import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  activeroute: ActivatedRoute;
  id: any;
  productService: ProductService;
  product: any;
  user: any = {};
  constructor(
    activeroute: ActivatedRoute,
    productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private vendorService: VendorService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activeroute = activeroute;
    this.productService = productService;
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    this.id = this.activeroute.snapshot.paramMap.get('id');

    this.productService.getProductById(this.id).subscribe(
      (response: any) => {
        this.product = response;
        console.log(response);

        this.categoryService
          .getCategoryById(this.product.categoryid)
          .subscribe((res) => (this.product.category = res.name));
        this.vendorService
          .getVendorById(this.product.vendorid)
          .subscribe((res) => (this.product.vendor = res.name));
        this.brandService
          .getBrandById(this.product.brandid)
          .subscribe((res) => (this.product.brand = res.name));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProductToCart(product: any) {
    if (this.user) {
      console.log(product);
      product.quantity = 1;
      product.userid = this.user.id;
      product.productid = product.id;
      delete product.id;
      this.cartService.postProductToCart(product).subscribe((res) => {
        alert('Product added to cart');
      });
    } else {
      alert('Login first !!!');
      this.router.navigate(['/login']);
    }
  }
}
