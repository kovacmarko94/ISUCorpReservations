import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationAddEditComponent } from './reservation-add-edit/reservation-add-edit.component';
import { ReservationRoutingModule } from './reservation.routing';
import { NgxEditorModule } from 'ngx-editor';
import { 
  PaginationModule,
  ButtonsModule,
  RatingModule,
  BsDatepickerModule,
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    RatingModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxEditorModule,
    HttpClientModule
  ],
  declarations: [
    ReservationListComponent,
    ReservationAddEditComponent,
  ]
})
export class ReservationModule { }