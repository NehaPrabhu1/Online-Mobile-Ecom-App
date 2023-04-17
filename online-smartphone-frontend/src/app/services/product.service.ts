import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<any[]>('http://localhost:3001/products');
  }

  getProductById(id:number){
    return this.http.get<any>('http://localhost:3001/products/'+id);
  }

  public getProductByBrand(id:number) {
    return this.http.get(`http://localhost:3001/products/brand/${id}`);
  }

  addNewProduct(product:any){
    return this.http.post('http://localhost:3001/products/addProduct',product);
  }

  updateProduct(product:any){
    return this.http.put('http://localhost:3001/product/updateProduct',product);
  }

  deleteProduct(id:number){
    return this.http.delete('http://localhost:3001/product/deleteProduct/'+id);
  }
}
