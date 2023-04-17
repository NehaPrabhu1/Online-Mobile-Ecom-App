import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any[]=[];
  orderitems:any[] = [];

  constructor(private productService:ProductService,private orderService:OrderService) { }

  ngOnInit(): void {
    //get user first
    this.orderService.getOrderByUser(1).subscribe(res=>
      {
        this.orders=res;
        console.log(res);
       for(let order of this.orders){
          this.orderitems = order.orderitems;
        let i = 0;
        for(let orderitem of this.orderitems){
          this.productService.getProductById(orderitem.productid).subscribe(data => {
            order.orderitems[i].product = data;
            i++;
          })
        }

       }
       console.log(this.orders);
      }) 
  }

}
