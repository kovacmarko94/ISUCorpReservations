import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-add-edit',
  templateUrl: './reservation-add-edit.component.html',
  styleUrls: ['./reservation-add-edit.component.css']
})
export class ReservationAddEditComponent implements OnInit {

  form: FormGroup;
  error = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      contactName: ['', [
        Validators.required
      ]],
      contactType: ['', [
        Validators.required
      ]],
      phoneNumber: '',
      dateOfBirth: ['', [
        Validators.required
      ]],
      htmlContent: ''
    });
  }
  
  onSubmit() {
    if (!this.form.valid) {
      this.error = true;
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
