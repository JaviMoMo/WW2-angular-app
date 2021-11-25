import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
