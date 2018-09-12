import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createReservationButtonActive: boolean = true;

  constructor(private router: Router) {} 

  goToAddEditReservationForm = () => {
    this.createReservationButtonActive = !this.createReservationButtonActive;
    this.router.navigate(['reservation/add-edit']);
  };

  goToListAllReservations = () => {
    this.createReservationButtonActive = !this.createReservationButtonActive;
    this.router.navigate(['reservation']);
  };
}
