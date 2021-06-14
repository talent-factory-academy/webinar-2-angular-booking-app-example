import { Component } from '@angular/core';
import { ReservationService } from './services/reservation.service';

@Component({
  selector: 'fb-reservation',
  template: `

    <mat-drawer-container class="view">
      <!--left col-->
      <mat-drawer mode="side" opened class="left-panel">
        <fb-reservation-list
          [items]="reservationService.sites | async"
          [selectedSite]="reservationService.currentItem"
          (itemClick)="reservationService.currentItem = $event"
        ></fb-reservation-list>
      </mat-drawer>

      <!--right col-->
      <mat-drawer-content>
        <fb-reservation-map
          [sites]="reservationService.sites | async"
          [currentSite]="reservationService.currentItem?.coords"
          (markerClick)="reservationService.openReservationModal($event)"
        ></fb-reservation-map>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
    .view { width: 100%;height: 100vh;margin: 0 }
    .left-panel { min-width: 250px; }
  `]
})
export class ReservationComponent {
  constructor(public reservationService: ReservationService) {}

}
