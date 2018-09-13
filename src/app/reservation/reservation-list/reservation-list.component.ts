import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations = [
    {
      contactName: 'test',
      reservationDate: 'test',
      rank: 'test',
      favorite: 'test'
    },
    {
      contactName: 'test',
      reservationDate: 'test',
      rank: 'test',
      favorite: 'test'
    },
    {
      contactName: 'test',
      reservationDate: 'test',
      rank: 'test',
      favorite: 'test'
    },
    {
      contactName: 'test',
      reservationDate: 'test',
      rank: 'test',
      favorite: 'test'
    },
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
