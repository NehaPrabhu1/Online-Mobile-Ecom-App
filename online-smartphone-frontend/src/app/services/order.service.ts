import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrderByUser(userid:number){
    return this.http.get<any[]>('http://localhost:3001/orders/user/'+userid);
  }

  addNewOrder(order:any){
    return this.http.post('http://localhost:3001/orders/addOrder/',order);
  }
}
