import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userCount:number = 0;
  productCount:number = 0 ;
  orderCount:number = 0;
  vendorCount:number = 0;
  salesCount:number = 0;
  brandCount:number = 0;

  constructor(private productService:ProductService, 
    private brandService:BrandService,
    private vendorService:VendorService,
    private userService:UserService) { }

  ngOnInit(): void {

    this.brandService.getAllBrands().subscribe(res => this.brandCount = res.length);
    this.productService.getAllProducts().subscribe(res => this.productCount = res.length);
    this.vendorService.getAllVendors().subscribe(res => this.vendorCount = res.length);
    this.userService.getAllUsers().subscribe(res => this.userCount = res.length);
  }

}
