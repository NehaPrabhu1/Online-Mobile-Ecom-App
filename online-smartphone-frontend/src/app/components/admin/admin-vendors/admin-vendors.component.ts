import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.css']
})
export class AdminVendorsComponent implements OnInit {

  vendors:any[] =[];
  newVendor:any = {};

  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.vendorService.getAllVendors().subscribe(res => this.vendors = res);
  }

  addNewVendor(){
    console.log(this.newVendor);
    this.vendorService.addNewVendor(this.newVendor).subscribe(res =>{
      console.log(res);
      this.ngOnInit();
    },
      (err) =>this.ngOnInit());
  }

}
