import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.css'],
})
export class AdminVendorsComponent implements OnInit {
  vendors: any[] = [];
  newVendor: any = {};
  isUpdate: boolean = false;

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getAllVendors().subscribe((res) => (this.vendors = res));
  }

  validateVendor(): boolean {
    if (this.newVendor.name == null || this.newVendor.name.trim() == '') {
      alert('Add vendor name');
      return false;
    }
    if (this.newVendor.email == null || this.newVendor.email.trim() == '') {
      alert('Add vendor email');
      return false;
    }
    if (this.newVendor.address == null || this.newVendor.address.trim() == '') {
      alert('Add vendor address');
      return false;
    }
    if (this.newVendor.city == null || this.newVendor.city.trim() == '') {
      alert('Add vendor city');
      return false;
    }
    if (this.newVendor.pincode == null || this.newVendor.pincode.trim() == '') {
      alert('Add vendor pincode');
      return false;
    }
    if (this.newVendor.phone == null || this.newVendor.phone.trim() == '') {
      alert('Add vendor contact');
      return false;
    }
    return true;
  }
  addNewVendor() {
    if (this.validateVendor()) {
      console.log(this.newVendor);
      this.vendorService.addNewVendor(this.newVendor).subscribe((res) => {
        console.log(res);
        alert('Vendor added.');
      });
      window.location.reload();
    }
  }

  updateVendor(vendor: any) {
    this.newVendor = vendor;
    this.isUpdate = true;
  }

  updateThisVendor() {
    if (this.validateVendor()) {
      this.vendorService.updateVendor(this.newVendor).subscribe((res) => {
        alert('Vendor updated.');
      });
      this.isUpdate = false;
      window.location.reload();
    }
  }

  deleteVendor(vendor: any) {
    this.vendorService
      .deleteVendor(vendor.id)
      .subscribe((res) => console.log('Product deleted'));
    window.location.reload();
  }
}
