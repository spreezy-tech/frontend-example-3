import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookTableComponent } from './book-table/book-table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookTableComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    BookTableComponent
  ]
})
export class BookingModule { }
