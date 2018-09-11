
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
    { path: '', component: ReservationListComponent }
];

export const ReservationRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);