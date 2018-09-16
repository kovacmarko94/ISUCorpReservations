import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddEdtComponent } from './contact-add-edt/contact-add-edt.component';
import { ContactRoutingModule } from './contact.routing';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './share/service/contact.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [ContactListComponent, ContactAddEdtComponent],
  providers: [ContactService]
})
export class ContactModule { }
