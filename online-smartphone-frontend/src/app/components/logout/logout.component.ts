import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Logged out');
    sessionStorage.removeItem('user');
    sessionStorage.clear();
    localStorage.removeItem('Address');
    localStorage.clear();
    this.router.navigate(['/login']).then(() => window.location.reload());
  }
}
