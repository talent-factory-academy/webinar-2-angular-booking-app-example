import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletMapComponent } from './shared/leaflet-map/leaflet-map.component';
import { ReservationMapComponent } from './features/reservation/components/reservation-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SearchPipe } from './features/reservation/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservationModalComponent } from './features/reservation/components/reservation-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReservationComponent } from './features/reservation/reservation.component';
import { ReservationListComponent } from './features/reservation/components/reservation-list.component';
import { LeafletSimpleDemoComponent } from './features/leaflet-simple-demo/leaflet-simple-demo.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LeafletMapComponent,
    ReservationMapComponent,
    SearchPipe,
    ReservationModalComponent,
    ReservationComponent,
    ReservationListComponent,
    LeafletSimpleDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatRippleModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
