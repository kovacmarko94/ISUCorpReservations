import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { Contact } from '../../share/model/contact';
import { ContactService } from '../share/service/contact.service';
import { firstLetterToUpperCase, getDateOfBirth } from '../../share/utils';

@Component({
  selector: 'app-contact-add-edt',
  templateUrl: './contact-add-edt.component.html',
  styleUrls: ['./contact-add-edt.component.css']
})
export class ContactAddEdtComponent implements OnInit {

  form: FormGroup;
  error = '';
  contact: Contact = {
    id: null,
    name: '',
    type: null,
    dateOfBirth: ''
  }

  contactTypes = [
    {
      id: 0, 
      name: 'Contact Type 1'
    },
    {
      id: 1, 
      name: 'Contact Type 2'
    },
    {
      id: 2, 
      name: 'Contact Type 3'
    },
  ];

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.applyFormValidations();
  }

  applyFormValidations() {
    this.form = this.fb.group({
      contactName: ['', [
        Validators.required
      ]],
      contactType: ['', [
        Validators.required
      ]],
      dateOfBirth: ['', [
        Validators.required,
        CustomValidators.date
      ]],
      phoneNumber: '',
    });
  }

  onContactTypeChange(contactType) {
    this.contact.type = +contactType;
  }
  
  getDateOfBirth(date) {
    if (typeof date === 'string') {
      return date;
    } 
    return getDateOfBirth(date);
  }

  save() {
    const dateOfBirth = this.getDateOfBirth(this.contact.dateOfBirth);
    this.contact.name = firstLetterToUpperCase(this.contact.name);
    this.contact.dateOfBirth = dateOfBirth;
    this.contactService.save(this.contact).subscribe(() => {
      this.goToContatsListPage();
    }, 
    e => {
      this.error = e.error;
    });
  }

  goToContatsListPage() {
    this.router.navigate(['/contact']);
  }

  onSubmit() {
    if (!this.form.valid) {
      this.error = 'Error! Fields are invalid!';
    } else {
      this.save();
    }
  }

  get contactName() {
    return this.form.get('contactName');
  }

  get contactType() {
    return this.form.get('contactType');
  }

  get dateOfBirth() {
    return this.form.get('dateOfBirth');
  }

}
