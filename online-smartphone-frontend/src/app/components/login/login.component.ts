import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/users/"+
    this.loginForm.value.email+"/"+this.loginForm.value.password)
    .subscribe(res=>{
      const user = res;
      if(user){
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["cart"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    });
  }

}
