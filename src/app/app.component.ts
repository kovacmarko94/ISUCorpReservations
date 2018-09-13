import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  createReservationButtonActive: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.createReservationButtonActive = event.url === '/reservation' ? true : false;
      }
    });
  }

  goToAddEditReservationForm = () => {
    this.createReservationButtonActive = !this.createReservationButtonActive;
    this.router.navigate(['reservation/add-edit']);
  };

  goToListAllReservations = () => {
    this.createReservationButtonActive = !this.createReservationButtonActive;
    this.router.navigate(['reservation']);
  };
}
