import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  postProductToCart(value:any) {
    return this.http.post('http://localhost:3000/cartProducts', value);
  }
  getCartProducts(userid:number) {
    let apiUrl = 'http://localhost:3000/cartProducts?userid='+userid;
    return this.http.get(apiUrl);
  }
  deleteProductFromCart(id:any) {
    return this.http.delete('http://localhost:3000/cartProducts/'+id);
  }

  updateCartProduct(value:any, id:number){
    return this.http.put('http://localhost:3000/cartProducts/'+id, value);
  }
}
