
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationAddEditComponent } from './reservation-add-edit/reservation-add-edit.component';

const routes: Routes = [
    { path: '', component: ReservationListComponent },
    { path: 'add-edit', component: ReservationAddEditComponent }
];

export const ReservationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);