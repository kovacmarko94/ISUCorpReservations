import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationAddEditComponent } from './reservation-add-edit/reservation-add-edit.component';
import { ReservationRoutingModule } from './reservation.routing';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    ReservationListComponent,
    ReservationAddEditComponent,
  ]
})
export class ReservationModule { }