import { Component, OnInit } from '@angular/core';
import { ContactService } from '../share/service/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../share/model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [];

  contactTypes = [
    'Contact Type 1',
    'Contact Type 2',
    'Contact Type 3'
  ];

  headers = [
    'Name',
    'Type',
    'Phone Number',
    'Date of Birth'
  ];

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAll().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  goToContactAddEdit() {
    this.router.navigate(['/contact/add-edit']);
  }

  edit(contact: Contact) {
    this.router.navigate(['contact/add-edit/' + contact.id]);
  }
  
  delete(contact: Contact) {
    this.contactService.delete(contact.id).subscribe(() => {
      this.getAllContacts();
    });
  }
}
