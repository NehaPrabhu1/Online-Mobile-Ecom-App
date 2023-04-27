import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contacts: any[] = [];
  newContact: any = {};

  userEmails = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  validateContact(): boolean {
    if (this.newContact.fname == null || this.newContact.fname.trim() == '') {
      alert('Please Add first name');
      return false;
    }

    if (this.newContact.lname == null || this.newContact.lname.trim() == '') {
      alert('Please Add Last Name');
      return false;
    }

    if (this.newContact.email == null || this.newContact.email.trim() == '') {
      alert('Please Add email');
      return false;
    }
    if (
      this.newContact.comment == null ||
      this.newContact.comment.trim() == ''
    ) {
      alert('Please Add vendor city');
      return false;
    }

    return true;
  }

  addNewContact() {
    if (this.validateContact()) {
      this.contactService.addNewContact(this.newContact).subscribe((res) => {
        console.log(res);
      });

      alert('Thank you for sending an email!!');
      window.location.reload();
    }
  }

  getMessage() {
    alert('Thank For Sending an Email..');
  }
}
