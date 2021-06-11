import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationModalComponent } from './components/reservation-modal.component';
import { Site, Time } from '../../model/site';
import { filter } from 'rxjs/operators';
import { MOCK } from '../../mock-data';

@Component({
  selector: 'fb-reservation',
  template: `

    <mat-drawer-container class="view">
      <!--left side-->
      <mat-drawer mode="side" opened style="min-width: 250px;padding: 10px">
        <fb-reservation-list
          [list]="sites"
          [selectedItem]="currentItem"
          (itemClick)="currentItem = $event"
        ></fb-reservation-list>
      </mat-drawer>

      <!--right side-->
      <mat-drawer-content>
        <fb-reservation-map
          [currentSite]="currentItem?.coords"
          [sites]="sites"
          (markerClick)="openReservationModal($event)"
        ></fb-reservation-map>
      </mat-drawer-content>
    </mat-drawer-container>

    <pre>{{currentItem | json}}</pre>
  `,
  styles: [` .view { width: 100%;height: 100vh;margin: 0 } `]
})
export class ReservationComponent {
  currentItem!: Site | null;
  sites: Site[] = MOCK;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  /**
   * Open the reservation modal after clicking markers
   */
  openReservationModal(site: Site): void {
    const dialogRef = this.dialog.open(
      ReservationModalComponent,
      { data: site  }
    );

    dialogRef.afterClosed()
      .pipe(filter(selection => !!selection))
      .subscribe((selection: { selectedDate: Date, selectedTime: Time, site: Site}) => {
        this.save(selection);
      });
  }

  /**
   * Save the reservation
   * @param selection
   */
  save(selection: { selectedDate: Date, selectedTime: Time, site: Site}) {
    this._snackBar.open(
      `⭐️ ${selection.selectedDate.toDateString()} - ${selection.selectedTime}`, selection.site.name,
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: 'snack'
      }
    );
  }
}
