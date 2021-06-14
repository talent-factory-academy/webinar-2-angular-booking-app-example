import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Site, Time } from '../../../model/site';

@Component({
  selector: 'fb-reservation-modal',
  template: `
    <h2 mat-dialog-title>Book an appointment in "{{data.name}}"</h2>
    
    <mat-dialog-content class="mat-typography" style="min-height: 450px">
      <!--Date picker-->
      <mat-tab-group [(selectedIndex)]="tabIndex">
        <mat-tab label="Date">
          <mat-calendar
            [selected]="selectedDate"
            [dateFilter]="filterByAvailableDates"
            (selectedChange)="chooseDateHandler($event)"></mat-calendar>
        </mat-tab>
        
        <!--Time Picker-->
        <mat-tab label="Time" [disabled]="!selectedDate">
          <mat-list>
            <!--List of available times-->
            <mat-list-item
              mat-ripple
              *ngFor="let time of availableTimes"
              [mat-dialog-close]="closeModal(time)"
            >
              <mat-icon>timer</mat-icon> {{time}}
              <mat-divider></mat-divider>
            </mat-list-item>
          </mat-list>
        </mat-tab>
        
      </mat-tab-group>
    </mat-dialog-content>
  `,
})
export class ReservationModalComponent {
  tabIndex: number = 0;         // 0: tab date | 1: tab time
  selectedDate: Date | null = null;   // calendar selected day
  availableDates: Date[] = [];      // available dates for a site
  availableTimes: Time[] = [];      // aviilable times for a date

  constructor(@Inject(MAT_DIALOG_DATA) public data: Site ) {
    // available dates for the opened site
    this.availableDates = (data.availableDates || []).map(seat => {
      return new Date(seat.date)
    })
  }

  /**
   * Display available dates
   */
  filterByAvailableDates = (d: Date | null): boolean => {
    const time = d?.getTime();
    return !!this.availableDates.find(x => x.getTime() === time);
  }

  /**
   * Invoked when user selects a day from date picker
   */
  chooseDateHandler(selectedDate: Date | null) {
    // go to Time Tab
    this.tabIndex = 1;
    // save the selected date
    this.selectedDate = selectedDate;
    // set available times for selected day
    this.availableTimes = this.data.availableDates.find(seat => {
      return this.selectedDate && new Date(seat.date).getTime() === new Date(this.selectedDate).getTime();
    })?.availableTimes || [];

  }

  /**
   * Invoked when user selects a time
   * NOTE: this operation confirms the reservation
   */
  closeModal(time: Time) {
    return {
      selectedDate: this.selectedDate,
      selectedTime: time,
      site: this.data
    }
  }
}
