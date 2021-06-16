import { Component } from '@angular/core';
import * as L from 'leaflet';

const mapTheme = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark';

const IconWhite = L.icon({
  iconUrl: './assets/marker_white.png',
  iconSize: [34, 44],
  iconAnchor: [17, 42],
});

const IconRed = L.icon({
  iconUrl: './assets/marker_red.png',
  iconSize: [34, 44],
  iconAnchor: [17, 42],
});

@Component({
  selector: 'fb-reservation-map',
  template: `
    Mappa
  `,
})
export class ReservationMapComponent {

}
