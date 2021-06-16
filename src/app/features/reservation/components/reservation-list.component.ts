import { Component } from '@angular/core';

@Component({
  selector: 'fb-reservation-list',
  template: `
    <div class="list-header">
      <h2>Book an appointment <br>with your bank</h2>
      <mat-form-field class="example-form-field">
        <mat-label>Filter by name</mat-label>
        <input matInput type="text">
        <button matSuffix mat-icon-button aria-label="Clear">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>

    <div class="list-content">
      <mat-list>
        <mat-list-item matRipple>
          <mat-icon mat-list-icon>map</mat-icon>
          <div mat-line>View all</div>
        </mat-list-item>

        <mat-divider></mat-divider>
        <mat-list-item matRipple>
          <mat-icon mat-list-icon>place</mat-icon>
          <div mat-line>Site Name</div>
        </mat-list-item>
        
        <mat-divider></mat-divider>
        <mat-list-item matRipple>
          <mat-icon mat-list-icon>place</mat-icon>
          <div mat-line>Site Name</div>
        </mat-list-item>

      </mat-list>
    </div>
  `,
  styles: [`
    .list-header {
      position: absolute; text-align: center; z-index: 10; left: 0; right: 0; background-color: white
    }
    .list-content {
      padding-top: 130px
    }
  `]
})
export class ReservationListComponent {

}
