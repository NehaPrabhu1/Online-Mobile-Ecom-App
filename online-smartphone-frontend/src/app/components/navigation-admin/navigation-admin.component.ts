import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.css'],
})
export class NavigationAdminComponent implements OnInit {
  isAdmin: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
