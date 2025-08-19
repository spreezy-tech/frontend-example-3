import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BookingRequest } from '../models/booking-request';
import { BookingService } from '../services/booking-service.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {

  bookingRequest !: BookingRequest;

  bookingDetails = this.formBuilder.group({
    bookingDate: new FormControl<string>(''),
    bookingTime: new FormControl<string>(''),
    headCount: new FormControl<number>(0)
  });

  constructor(private formBuilder : FormBuilder, private bookingService : BookingService){}
  
  captureBookingDetails() : void {
    this.bookingRequest = new BookingRequest();
    this.bookingRequest.bookingDate = this.bookingDetails.value.bookingDate == null ? '' : this.bookingDetails.value.bookingDate;
    this.bookingRequest.bookingTime = this.bookingDetails.value['bookingTime'] == null ? '' : this.bookingDetails.value["bookingTime"];
    // this.bookingRequest.headCount = this.bookingDetails.value.headCount;
    this.bookingService.createBooking(this.bookingRequest);
  }
}
