import { Component, Input, OnInit } from '@angular/core';
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
  searchedKeyword: any;
  id: any;
  brandid: any;
  user: any = {};
  isBrand = false;
  isSearch = false;
  brand: any = {};
  popularProducts: any[] = [];

  constructor(
    productService: ProductService,
    private brandService: BrandService,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.productService = productService;
  }

  ngOnInit(): void {
    let path = this.route.snapshot.routeConfig?.path;
    if (path?.includes('brand')) {
      this.isBrand = true;
      this.isSearch = false;
      this.route.paramMap.subscribe((params) => {
        let id = parseInt(params.get('id')!);
        this.getProductByBrands(id);
        this.brandService
          .getBrandById(id)
          .subscribe((res) => (this.brand = res));
      });
    } else if (path?.includes('search')) {
      this.isSearch = true;
      this.route.params.subscribe((param) => {
        this.searchedKeyword = param['search'];
        this.getAllProduct();
        this.getAllBrand();
      });
    } else {
      this.isBrand = false;
      this.isSearch = false;
      this.getAllProduct();
      this.getAllBrand();
    }
    this.getPopularProducts();
  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        this.productList = response;
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
    product.quantity = 1;
    this.cartService.postProductToCart(product).subscribe((res) => {
      alert('Product added to cart');
      this.router.navigate(['cart']).then(() => window.location.reload());
    });
  }

  getPopularProducts() {
    let products: any[] = [];
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        products = response;
        for (let i = 3; i < 7; i++) {
          this.popularProducts.push(products[i]);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
