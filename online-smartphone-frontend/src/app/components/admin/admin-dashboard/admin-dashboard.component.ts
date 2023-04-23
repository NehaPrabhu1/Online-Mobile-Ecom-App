import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { VendorService } from 'src/app/services/vendor.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  userCount: number = 0;
  productCount: number = 0;
  orderCount: number = 0;
  vendorCount: number = 0;
  salesCount: number = 0;
  brandCount: number = 0;
  orderitemCount: number = 0;
  totalSales: number = 0;
  orders: any[] = [];
  orderdates: any[] = [];
  orderdate: any;
  productSales: any[] = [];
  products: any[] = [];
  productNames: any[] = [];
  chart: any;

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private vendorService: VendorService,
    private userService: UserService,
    private orderService: OrderService
  ) {}

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      this.productCount = res.length;
      for (let i = 1; i <= this.productCount; i++) {
        this.productSales[i] = 0;
      }
    });
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.productNames,
        datasets: [
          {
            label: 'Sales',
            data: this.productSales,
            backgroundColor: 'darkblue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  ngOnInit(): void {
    this.totalSales = 0;
    this.orderitemCount = 0;
    this.orderCount = 0;
    this.productSales.fill(0);
    this.getAllProducts();
    this.brandService
      .getAllBrands()
      .subscribe((res) => (this.brandCount = res.length));

    this.vendorService
      .getAllVendors()
      .subscribe((res) => (this.vendorCount = res.length));
    this.userService
      .getAllUsers()
      .subscribe((res) => (this.userCount = res.length));
    this.orderService.getAllOrders().subscribe((res) => {
      this.orderCount = res.length;
      this.orders = res;
      for (let order of this.orders) {
        let orderdate = order.orderdate;
        if (!this.orderdates.find((date: Date) => date == orderdate)) {
          this.orderdates.push(orderdate);
        }
        let orderitems = order.orderitems;
        for (let orderitem of orderitems) {
          this.orderitemCount += orderitem.quantity;
          this.productSales[orderitem.productid] += orderitem.quantity;
        }
        this.totalSales += order.total_payment;
      }
      for (let product of this.products) {
        product.productSale = this.productSales[product.id];
        this.productNames[product.id] = product.productname;
      }
      this.createChart();
    });
  }

  onDateChange(orderdate: any) {
    if (orderdate != 0) {
      this.totalSales = 0;
      this.orderitemCount = 0;
      this.orderCount = 0;
      for (let order of this.orders) {
        if (order.orderdate == orderdate) {
          this.totalSales += order.total_payment;
          for (let orderitem of order.orderitems) {
            this.orderitemCount += orderitem.quantity;
          }
          this.orderCount++;
        }
      }
    } else {
      this.ngOnInit();
    }
  }
}
