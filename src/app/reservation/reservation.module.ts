import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationAddEditComponent } from './reservation-add-edit/reservation-add-edit.component';
import { ReservationRoutingModule } from './reservation.routing';


@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule
  ],
  declarations: [
    ReservationListComponent,
    ReservationAddEditComponent,
  ]
})
export class ReservationModule { }
