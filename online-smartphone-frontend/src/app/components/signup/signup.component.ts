import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      firstname: [''],
      lastname: [''],
      role: 'user',
      address: [''],
      mobile: [''],
      password: [''],
    });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3001/users/addUser', this.signUpForm.value)
      .subscribe((res) => {
        alert('SIGNIN SUCCESFUL');
      });
    this.signUpForm.reset();
    this.router.navigate(['login']);
  }
}
