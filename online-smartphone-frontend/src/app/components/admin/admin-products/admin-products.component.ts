import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products :any[] = [];

  constructor(
    private productService:ProductService, 
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res =>{
      this.products = res;
      for(let product of this.products){
        this.brandService.getBrandById(product.brandid).subscribe(res =>{
         let brand = res;
         console.log(brand);
          product.brand = brand.name;
        });
        //vendor
        //category
      }
    });
  }

}
