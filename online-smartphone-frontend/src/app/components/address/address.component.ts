import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  address: any = {};
  user: any = {};
  pinCodePattern = '^[0-9]{6}$';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
  }

  submitAddress(): void {
    if (this.validateAddress()) {
      console.log(this.address);
      localStorage.setItem('Address', JSON.stringify(this.address));
      this.router.navigate(['checkout']);
    }
  }

  validateAddress() {
    let isValid = true;

    if (this.address.city == null || this.address.city == '') {
      alert('Please enter city');
      return false;
    }
    if (this.address.street == null || this.address.street == '') {
      alert('Please enter street');
      return false;
    }
    if (this.address.residence == null || this.address.residence == '') {
      alert('Please enter residence');
      return false;
    }
    if (this.address.country == null || this.address.country == '') {
      alert('Please enter country');
      return false;
    }
    if (this.address.pinCode == null || this.address.pinCode == '0') {
      alert('Please enter pinCode');
      return false;
    }

    return isValid;
  }
}
