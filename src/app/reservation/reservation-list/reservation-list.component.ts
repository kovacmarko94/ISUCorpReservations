import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  headers = [
    'Contact name',
    'Phone number',
    'Birth date',
    'Contact type',
    ''
  ];

  reservations = [
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    },
    {
      contactName: 'test',
      phoneNumber: 'test',
      birthDate: 'test',
      contactType: 'test'
    }
  ];

  getRowBackgroundColor = (id) => {
    return id % 2 === 0 ? '#EEEEEE' : '';
  }

  reservationObjectKeys = [
    'contactName',
    'phoneNumber',
    'birthDate',
    'contactType'
  ];

  constructor() { }

  ngOnInit() {
  }

}
