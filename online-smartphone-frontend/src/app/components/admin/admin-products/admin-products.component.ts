import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products :any[] = [];
  brands: any[] = [];
  categories: any[] = [];
  vendors: any[]= [];

  newProduct:any={};
  dimension:any={};
  isUpdate:boolean= false;
  changeProduct:any;

  constructor(
    private productService:ProductService, 
    private brandService:BrandService,
    private vendorService:VendorService,
    private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.brandService.getAllBrands().subscribe(res => this.brands = res);

    this.categoryService.getAllCategories().subscribe(res => this.categories = res);

    this.vendorService.getAllVendors().subscribe(res => this.vendors = res);

    this.productService.getAllProducts().subscribe(res =>{
      this.products = res;
      for(let product of this.products){
        this.brandService.getBrandById(product.brandid).
        subscribe(res => product.brand = res.name);
        
        this.vendorService.getVendorById(product.vendorid).
        subscribe(res => product.vendor = res.name);
        console.log(product.vendor);

        this.categoryService.getCategoryById(product.categoryid).
        subscribe(res => product.category = res.name);
      }
    });
  }

  addNewProduct(){
    this.newProduct.categoryid = parseInt(this.newProduct.categoryid);
    this.newProduct.brandid = parseInt(this.newProduct.brandid);
    this.newProduct.vendorid = parseInt(this.newProduct.vendorid);
    this.newProduct.dimension = this.dimension;
    console.log(this.newProduct);
    this.productService.addNewProduct(this.newProduct).subscribe(res => alert("Product added !!!"));
    window.location.reload();
  }

  updateProduct(product:any){
    this.newProduct = product;
    this.dimension = this.newProduct.dimension;
  }

  updateThisProduct(){
    this.newProduct.dimension = this.dimension;
    let updatedProduct:any = {};
    updatedProduct.id = this.newProduct.id;
    updatedProduct.categoryid = this.newProduct.categoryid;
    updatedProduct.brandid = this.newProduct.brandid;
    updatedProduct.vendorid = this.newProduct.vendorid;
    updatedProduct.productname = this.newProduct.productname;
    updatedProduct.color = this.newProduct.color;
    updatedProduct.image = this.newProduct.image;
    updatedProduct.price = this.newProduct.price;
    updatedProduct.resolution = this.newProduct.resolution;
    updatedProduct.os = this.newProduct.os;
    updatedProduct.camera = this.newProduct.camera;
    updatedProduct.RAM = this.newProduct.RAM;
    updatedProduct.storage = this.newProduct.storage;
    updatedProduct.dimension = this.newProduct.dimension;
    console.log(this.newProduct);
    this.productService.updateProduct(updatedProduct).subscribe(res => {
      alert("Product updated !!!");
    });
    window.location.reload();
  }

  clear(){
    this.newProduct = {};
  }

  deleteProduct(product:any){
    this.productService.deleteProduct(product.id).subscribe(res => console.log("Product deleted"));
    window.location.reload();
  }

}
