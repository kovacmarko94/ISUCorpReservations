
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: 'reservation', loadChildren: './reservation/reservation.module#ReservationModule'},
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    { path: '**', redirectTo: '/reservation'}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);