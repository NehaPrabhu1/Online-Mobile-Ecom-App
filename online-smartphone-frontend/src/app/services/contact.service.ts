import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<any[]>('http://localhost:3001/contacts');
  }

  addNewContact(contact: any) {
    return this.http.post('http://localhost:3001/contacts/addContact', contact);
  }
}
