import { Component } from '@angular/core';

@Component({
  selector: 'fb-reservation',
  template: `

    <mat-drawer-container class="view">
      <!--left col-->
      <mat-drawer mode="side" opened class="side-panel">
        <!--Site List-->
        <fb-reservation-list></fb-reservation-list>
      </mat-drawer>

      <!--right col-->
      <mat-drawer-content>
        <!--Map-->
        <fb-reservation-map></fb-reservation-map>
        
        
        <!--Modal Example-->
        <!--
        <div style="width: 400px">
          <fb-reservation-modal></fb-reservation-modal>
        </div>
        -->
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
    .view {
      width: 100%;
      height: 100vh;
      margin: 0
    }

    .side-panel {
      min-width: 250px;
    }
  `]
})
export class ReservationComponent {

}
