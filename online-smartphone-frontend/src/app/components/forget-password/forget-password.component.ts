import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  public forgotPassForm!: FormGroup;
  email: string = '';
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgotPassForm = this.formbuilder.group({
      email: [''],
    });
  }

  forgotPass() {
    this.http.get<any>('http://localhost:3001/users').subscribe((res) => {
      const user = res.find((a: any) => {
        if (a.email === this.forgotPassForm.value.email) {
          alert('We have emailed password to your registered email.');
          this.forgotPassForm.reset();
        }
      });
    });
  }
}
