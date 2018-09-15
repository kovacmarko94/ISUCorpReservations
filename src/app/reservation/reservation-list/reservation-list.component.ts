import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../share/service/reservation.service';
import { Reservation } from '../share/model/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  
  sortTypes = [
    'By Date Ascending',
    'By Date Descending',
    'By Alphabetic Ascending',
    'By Alphabetic Descending',
    'By Ranking'
  ];

  reservations: Reservation[] = [];
  selectedSortType = '';

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllReservations();
  }

  formatTimestamp(timestamp) {
    const now = new Date(+timestamp);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours();
    let minutes = '';
    if (now.getMinutes() < 10) {
      minutes = '0' + now.getMinutes();
    } else {
      minutes = now.getMinutes().toString();
    }
    const ampm = hours >= 12 ? 'pm' : 'am';
    return day + ' ' + month + ' ' + date + ' at ' + hours + ':' + minutes + ' ' + ampm;
  }

  getAllReservations() {
    this.reservationService.getAll().subscribe(response => {
      this.reservations = response;
    });
  }

  sortByAlphabeticAscending() {
    this.reservations.sort(
      (a, b) => a.contact.name < b.contact.name ? 1 : -1 );
  }

  sortByAlphabeticDescending() {
    this.reservations.sort(
      (a, b) => a.contact.name > b.contact.name ? 1 : -1 );
  }

 // refactor
  sortByDateAscending() {
    this.reservations.sort((a,b) => {  
      var dateA = +a.dateOfCreation;
      var dateB = +b.dateOfCreation;
      return dateA > dateB ? 1 : -1;  
    });
  }

  sortByDateDescending() {
    this.reservations.sort((a,b) => {  
      var dateA = +a.dateOfCreation;
      var dateB = +b.dateOfCreation;
      return dateA < dateB ? 1 : -1;  
    });
  }

  sortByRanking() {
    this.reservations = this.reservations.sort(
      (a, b) => a.ranking < b.ranking ? 1 : -1 );
  }

  applySort(sortType) {
    switch(sortType) {
      case 0:
        this.sortByDateAscending();
        break;
      case 1:
        this.sortByDateDescending();
        break;
      case 2:
        this.sortByAlphabeticAscending();
        break;
      case 3:
        this.sortByAlphabeticDescending();
        break;
      case 4:
        this.sortByRanking();
        break;
    }
  }

  onFavoriteChange(reservation) {
    reservation.favorite = !reservation.favorite;
    this.reservationService
      .update(reservation.id, reservation)
      .subscribe(() => {
        this.getAllReservations();
      });
  }


  onRankChange(reservation) {
    this.reservationService
      .update(reservation.id, reservation)
      .subscribe(() => {
        this.getAllReservations();
      });
  }

  onChange(sortType) {
    this.applySort(+sortType);
  }

  edit(reservation: Reservation) {
    this.router.navigate(['reservation/add-edit/' + reservation.id]);
  }

}
