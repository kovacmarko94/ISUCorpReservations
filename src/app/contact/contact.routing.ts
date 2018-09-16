import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddEdtComponent } from './contact-add-edt/contact-add-edt.component';

const routes: Routes = [
    { path: '', component: ContactListComponent },
    { path: 'add-edit', component: ContactAddEdtComponent },
    { path: 'add-edit/:id', component: ContactAddEdtComponent }
];

export const ContactRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);