import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3001/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Succesful');
          this.loginForm.reset();
          sessionStorage.setItem('user', JSON.stringify(user));
          if (user.role == 'user') {
            this.router
              .navigate(['/cart'])
              .then(() => window.location.reload());
          } else if (user.role == 'admin') {
            this.router
              .navigate(['/admin'])
              .then(() => window.location.reload());
          }
        } else {
          alert('Please Enter Valid Email Id & Password');
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
