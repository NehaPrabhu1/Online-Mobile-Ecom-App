import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admin-contact-messages',
  templateUrl: './admin-contact-messages.component.html',
  styleUrls: ['./admin-contact-messages.component.css'],
})
export class AdminContactMessagesComponent implements OnInit {
  messages: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((res) => {
      this.messages = res;
      console.log(this.messages);
    });
  }
}
