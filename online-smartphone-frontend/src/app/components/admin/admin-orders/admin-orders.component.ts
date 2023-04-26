import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  allOrders: any[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((res) => {
      this.allOrders = res;
      for (let order of this.allOrders) {
        for (let orderitem of order.orderitems) {
          this.productService
            .getProductById(orderitem.productid)
            .subscribe((res) => {
              orderitem.product = res;
            });
        }
        this.http
          .get('http://localhost:3001/users/' + order.userid)
          .subscribe((res) => {
            order.user = res;
          });
      }
    });
  }
}
