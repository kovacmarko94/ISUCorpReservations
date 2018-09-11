import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationRoutingModule } from './reservation.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReservationRoutingModule
  ],
  declarations: [
    ReservationListComponent
  ]
})
export class ReservationModule { }
