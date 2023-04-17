import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {  PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  productCount:number = 0;
  productCountStop:any = setInterval(()=>{
    this.productCount++;
    if(this.productCount == 400){
      clearInterval(this.productCountStop);
    }
  },10);

  userCount:number = 0;
  userCountStop:any = setInterval(()=>{
    this.userCount++;
    if(this.userCount == 100){
      clearInterval(this.userCountStop);
    }
  },10);

  orderCount:number = 0;
  orderCountStop:any = setInterval(()=>{
    this.orderCount++;
    if(this.orderCount == 150){
      clearInterval(this.orderCountStop);
    }
  },10);

  vendorCount:number = 0;
  vendorCountStop:any = setInterval(()=>{
    this.vendorCount++;
    if(this.vendorCount == 70){
      clearInterval(this.vendorCountStop);
    }
  },10);
  constructor() {
   }
 ngOnInit(): void {
    this.aos_init();
  }

  aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  
  

}
