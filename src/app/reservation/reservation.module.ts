import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationAddEditComponent } from './reservation-add-edit/reservation-add-edit.component';
import { ReservationRoutingModule } from './reservation.routing';
import { NgxEditorModule } from 'ngx-editor';
import { CustomFormsModule } from 'ngx-custom-validators';
import { TypeaheadModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { 
  PaginationModule,
  ButtonsModule,
  RatingModule,
  BsDatepickerModule,
} from 'ngx-bootstrap';
import { ReservationService } from './share/service/reservation.service';

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
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxEditorModule,
    CustomFormsModule,
    HttpClientModule
  ],
  declarations: [
    ReservationListComponent,
    ReservationAddEditComponent,
  ],
  providers: [
    ReservationService
  ]
})
export class ReservationModule { }