import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  user: any = {};
  constructor() {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    if (this.user) {
      if (this.user.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    } else {
      this.isAdmin = false;
    }
  }
}
