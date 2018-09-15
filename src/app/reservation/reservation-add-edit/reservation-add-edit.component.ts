import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../share/service/reservation.service';
import { Reservation } from '../share/model/reservation';

@Component({
  selector: 'app-reservation-add-edit',
  templateUrl: './reservation-add-edit.component.html',
  styleUrls: ['./reservation-add-edit.component.css']
})
export class ReservationAddEditComponent implements OnInit {

  form: FormGroup;
  error = false;
  disableContactFields = false;
  reservation: Reservation = {
    id: null,
    contact: {
      name: '',
      dateOfBirth: '',
      phoneNumber: '',
      type: null
    },
    dateOfCreation: '',
    htmlContent: '',
  };

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) { }

  ngOnInit() {
    this.applyFormValidation();
  }

  isEditModeActive() {
    return this.activeRoute.snapshot.params.id ? true : false;
  }

  getPathParam() {
    return this.activeRoute.snapshot.params.id;
  }

  applyFormValidation() {
    const editModeActive = this.isEditModeActive();
    if (editModeActive) {
      this.disableContactFields = true;
      this.form = this.fb.group({
        contactName: '',
        contactType: '',
        dateOfBirth: '',
        phoneNumber: '',
        htmlContent: ['', [
          Validators.required
        ]],
      });
      const id = this.getPathParam();
      this.reservationService.findById(id).subscribe(response => {
        this.reservation = response;
        this.form.value['contactName'] = response.contact.name;
        this.form.value['contactType'] = response.contact.type;
        this.form.value['dateOfBirth'] = response.contact.dateOfBirth;
        this.form.value['phoneNumber'] = response.contact.phoneNumber;
        this.form.value['htmlContent'] = response.htmlContent;
        this.form.value['dateOfCreation'] = response.dateOfCreation;
      });
    } else {
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
        htmlContent: ['', [
          Validators.required
        ]],
        phoneNumber: '',
      });
    }
  }

  getDateOfBirth(date) {
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  }

  onSubmit() {
    const {id} = this.reservation;
    if (!this.form.valid) {
      this.error = true;
    } else {
      id ? this.update(id) : this.save()
    }
  }

  update(id) {
    this.reservation.dateOfCreation = new Date().getTime().toString();
    this.reservationService.update(id, this.reservation).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  save() {
    const dateOfBirth = this.getDateOfBirth(this.reservation.contact.dateOfBirth);
    this.reservation.dateOfCreation = new Date().getTime().toString();
    this.reservation.contact.dateOfBirth = dateOfBirth;
    this.reservation.contact.type = 1; // remove this later
    this.reservationService.save(this.reservation).subscribe(() => {
      this.router.navigate(['/']);
    });
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
