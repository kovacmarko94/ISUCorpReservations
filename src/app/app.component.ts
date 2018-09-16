import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  createReservationButtonActive: boolean = true;

  url = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.createReservationButtonActive = event.url === '/reservation' ? true : false;
        this.url = event.url;
      }
    });
  }

  goToAddEditReservationForm() {
    this.createReservationButtonActive = !this.createReservationButtonActive;
    this.router.navigate(['reservation/add-edit']);
  };

  goToListAllReservations() {
    this.createReservationButtonActive = !this.createReservationButtonActive;
    this.router.navigate(['reservation']);
  };

  goToListAllContacts() {
    this.router.navigate(['contact']);
  }

  goToAddEditContacts() {
    this.router.navigate(['contact/add-edit']);
  }
}
