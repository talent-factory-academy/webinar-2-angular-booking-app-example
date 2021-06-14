import { Injectable } from '@angular/core';
import { MOCK } from '../../../mock-data';
import { Site, Time } from '../../../model/site';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationModalComponent } from '../components/reservation-modal.component';
import { filter } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  sites: Observable<Site[] |  null> = of(MOCK);
  currentSite = new BehaviorSubject<Site | null>(null)

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  /**
   * Set the selected site
   */
  setSelectedSiteHandler(site: Site | null) {
    this.currentSite.next(site);
  }

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
