import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  address: any = {};
  user: any = {};

  constructor() {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
  }

  submitAddress(): void {
    localStorage.setItem('Address', JSON.stringify(this.address));
  }
}
