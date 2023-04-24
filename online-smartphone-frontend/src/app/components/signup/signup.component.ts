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
  address: any = {};
  newUser: any = {};

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
      city: [''],
      street: [''],
      residence: [''],
      country: [''],
      pinCode: [''],
      mobile: [''],
      password: [''],
    });
  }

  signUp() {
    this.newUser.email = this.signUpForm.value.email;
    this.newUser.firstname = this.signUpForm.value.firstname;
    this.newUser.lastname = this.signUpForm.value.lastname;
    this.newUser.role = 'user';

    this.address.city = this.signUpForm.value.city;
    this.address.street = this.signUpForm.value.street;
    this.address.residence = this.signUpForm.value.residence;
    this.address.country = this.signUpForm.value.country;
    this.address.pinCode = this.signUpForm.value.pinCode;
    this.newUser.address = this.address;

    this.newUser.mobile = this.signUpForm.value.mobile;
    this.newUser.password = this.signUpForm.value.password;
    this.http
      .post<any>('http://localhost:3001/users/addUser', this.newUser)
      .subscribe((res) => {
        alert('SIGNIN SUCCESFUL');
      });
    this.signUpForm.reset();
    this.router.navigate(['login']);
    //console.log(this.newUser);
  }
}
