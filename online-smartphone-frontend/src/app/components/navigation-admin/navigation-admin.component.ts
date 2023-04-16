import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.css']
})
export class NavigationAdminComponent implements OnInit {

  isAdmin:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
