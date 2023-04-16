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

  validateProduct():boolean{
    let isValid = true;
    if(this.newProduct.categoryid == null || this.newProduct.categoryid == '0'){
      alert("Select correct category");
      return false;
    }
    if(this.newProduct.brandid == null || this.newProduct.brandid == '0'){
      alert("Select correct brand");
      return false;
    }
    if(this.newProduct.vendorid == null || this.newProduct.vendorid == '0'){
      alert("Select correct vendor");
      return false;
    }
    if(this.newProduct.productname == null || this.newProduct.productname.trim() == ''){
      alert("Add Product name");
      return false;
    }
    if(this.newProduct.color == null || this.newProduct.color.trim() == ''){
      alert("Add Product color");
      return false;
    }
    if(this.newProduct.os == null || this.newProduct.os.trim() == ''){
      alert("Add Product operating system");
      return false;
    }
    if(this.newProduct.price < 1 || this.newProduct.price == null){
      alert("Add proper price");
      return false;
    }
    if(this.newProduct.RAM < 1 || this.newProduct.RAM == null){
      alert("Add proper RAM in GBs");
      return false;
    }
    if(this.newProduct.storage < 1 || this.newProduct.storage == null){
      alert("Add proper storage in GBs");
      return false;
    }
    if(this.newProduct.camera < 1 || this.newProduct.camera == null){
      alert("Add proper camera resolution");
      return false;
    }
    if(this.dimension.l < 1 || this.dimension.l== null 
      || this.dimension.b < 1 || this.dimension.b== null 
      ||this.dimension.w < 1 || this.dimension.w== null){
      alert("Add proper dimensions in mm");
      return false;
    }
    if(this.newProduct.resolution == null || this.newProduct.resolution == ''){
      alert("Add proper screen resolution");
      return false;
    }
    if(this.newProduct.image == null || this.newProduct.image.trim() == ''){
      alert("Add proper image path");
      return false;
    }
    return isValid;
  }

  addNewProduct(){
    if(this.validateProduct()){
      this.newProduct.categoryid = parseInt(this.newProduct.categoryid);
      this.newProduct.brandid = parseInt(this.newProduct.brandid);
      this.newProduct.vendorid = parseInt(this.newProduct.vendorid);
      this.newProduct.dimension = this.dimension;
      console.log(this.newProduct);
      this.productService.addNewProduct(this.newProduct).subscribe(res => alert("Product added !!!"));
      window.location.reload();
    }
  }

  updateProduct(product:any){
    this.newProduct = product;
    this.dimension = this.newProduct.dimension;
  }

  updateThisProduct(){
    if(this.validateProduct()){
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
    else{
      window.location.reload();
    }
  }

  clear(){
    this.newProduct = {};
  }

  deleteProduct(product:any){
    this.productService.deleteProduct(product.id).subscribe(res => console.log("Product deleted"));
    window.location.reload();
  }

}
