import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  sortBy = 'Sort by';

  sortTypes = [
    'By Date Ascending',
    'By Date Descending',
    'By Alphabetic Ascending',
    'By Alphabetic Descending',
    'By Ranking'
  ];

  sortByAlphabeticAscending() {
    this.reservations = this.reservations.sort(
      (a, b) => a.contactName < b.contactName ? 1 : -1 );
  }

  sortByAlphabeticDescending() {
    this.reservations = this.reservations.sort(
      (a, b) => a.contactName > b.contactName ? 1 : -1 );
  }

  sortByRanking() {
    this.reservations = this.reservations.sort(
      (a, b) => a.ranking < b.ranking ? 1 : -1 );
  }

  applySort(sortType) {
    switch(sortType) {
      case 'By Alphabetic Ascending':
        this.sortByAlphabeticAscending();
        break;
      case 'By Alphabetic Descending':
        this.sortByAlphabeticDescending();
        break;
      case 'By Ranking':
        this.sortByRanking();
        break;
    }
  }

  reservations = [
    {
      contactName: 'pera',
      reservationDate: 'test',
      ranking: 1,
      favorite: 'test'
    },
    {
      contactName: 'ana',
      reservationDate: 'test',
      ranking: 5,
      favorite: 'test'
    },
    {
      contactName: 'djura',
      reservationDate: 'test',
      ranking: 4,
      favorite: 'test'
    },
    {
      contactName: 'mika',
      reservationDate: 'test',
      ranking: 3,
      favorite: 'test'
    },
  ];

  onSortChange(sortType) {
    this.sortBy = sortType;
    this.applySort(sortType);
  }

  constructor() { }

  ngOnInit() {
  }

}
