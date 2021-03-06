import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../share/service/reservation.service';
import { Reservation } from '../share/model/reservation';
import { getDateOfBirth, firstLetterToUpperCase} from '../../share/utils';

@Component({
  selector: 'app-reservation-add-edit',
  templateUrl: './reservation-add-edit.component.html',
  styleUrls: ['./reservation-add-edit.component.css']
})
export class ReservationAddEditComponent implements OnInit {

  form: FormGroup;
  names = [];
  error = false;
  disableContactFields = false;
  reservations: any[] = [];
  reservation: Reservation = {
    id: null,
    dateOfCreation: '',
    htmlContent: '',
    contact: {
      name: '',
      dateOfBirth: '',
      phoneNumber: '',
      type: null
    },
  };
  
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
    private reservationService: ReservationService,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.setupReservationForm();
    if (!this.disableContactFields) {
      this.reservationService.getAll().subscribe(reservations => {
        this.reservations = reservations.content;
        this.names = this.getNames();
      });
    }
  }

  getDateOfBirth(date) {
    if (typeof date === 'string') {
      return date;
    } 
    return getDateOfBirth(date);
  }

  focusEditor() {
    const element = this.renderer.selectRootElement('#contactName');
    setTimeout(() => element.blur(), 0);
  }

  onNameSelect(name) {
    this.focusEditor();
    for (let i = 0; i < this.reservations.length; i++) {
      if (this.reservations[i].contact.name === name) {
        this.reservation = this.reservations[i];
        this.reservation.id = null;
        this.updateFormValues(); 
        break;
      }
    }
    this.disableFormContactFields();
  }

  disableFormContactFields() {
    this.disableContactFields = true;
  }

  getNames() {
    let names = [];
    for (let i = 0; i < this.reservations.length; i++) {
      let contactName = this.reservations[i].contact.name;
      if (names.indexOf(contactName) === -1) {
        names.push(contactName);
      }
    }
    return names;
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
      htmlContent: ['', [
        Validators.required
      ]],
      phoneNumber: '',
    });
  }

  setupReservationForm() {
    const id = this.getReservationIdFromUrl();
    if (id) {
      this.disableFormContactFields();
      this.applyFormValidations();
      this.reservationService.findById(id).subscribe(response => {
        this.reservation = response;
        this.updateFormValues();
      });
    } else {
      this.applyFormValidations()
    }
  }

  updateFormValues() {
    this.form.value['contactName'] = this.reservation.contact.name;
    this.form.value['contactType'] = this.reservation.contact.type;
    this.form.value['dateOfBirth'] = this.reservation.contact.dateOfBirth;
    this.form.value['phoneNumber'] = this.reservation.contact.phoneNumber;
    this.form.value['htmlContent'] = this.reservation.htmlContent;
    this.form.value['dateOfCreation'] = this.reservation.dateOfCreation;
  }

  onSubmit() {
    const {id} = this.reservation;
    if (!this.form.valid) {
      this.error = true;
    } else {
      id ? this.update(id) : this.save()
    }
  }

  getReservationIdFromUrl() {
    const id = this.activeRoute.snapshot.params.id
    return id ? id : null;
  }

  goToReservationListPage() {
    this.router.navigate(['/reservation']);
  }

  getDateOfReservationCreation() {
    return new Date().getTime().toString();
  }

  onContactTypeChange(contactType) {
    this.reservation.contact.type = +contactType;
  }

  update(id) {
    this.reservation.dateOfCreation = this.getDateOfReservationCreation();
    this.reservationService.update(id, this.reservation).subscribe(() => {
      this.goToReservationListPage()
    });
  }

  save() {
    const dateOfBirth = this.getDateOfBirth(this.reservation.contact.dateOfBirth);
    this.reservation.contact.name = firstLetterToUpperCase(this.reservation.contact.name);
    this.reservation.dateOfCreation = this.getDateOfReservationCreation();
    this.reservation.contact.dateOfBirth = dateOfBirth;
    this.reservationService.save(this.reservation).subscribe(() => {
      this.goToReservationListPage()
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
