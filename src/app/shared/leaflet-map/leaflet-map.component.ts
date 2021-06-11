import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as L from 'leaflet';

const mapTheme = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark';

const myIcon = L.icon({
  iconUrl: './assets/marker.png',
  iconSize: [66, 82],
  iconAnchor: [32, 80],
});


@Component({
  selector: 'fb-leaflet-map',
  template: `
    <div #host style="width: 300px; height: 200px"></div>
  `,
})
export class LeafletMapComponent implements OnChanges {
  @Input() coords: [number, number] = [1,1];
  // When you add an exclamation mark after variable/property name, you’re telling to TypeScript that you’re certain that value is not null or undefined.
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLInputElement>;
  leafletMap!: L.Map;
  marker!: L.Marker;

  ngOnChanges( changes: SimpleChanges): void {
    if (changes.coords.isFirstChange()) {
      this.init();
    } else {
      this.update();
    }
  }

  init(): void {
    this.leafletMap = L.map(this.host.nativeElement).setView(this.coords, 13);
    this.leafletMap.attributionControl.setPrefix('Talent Factory')
    this.marker = L.marker(this.coords, {icon: myIcon}).addTo(this.leafletMap);
    L.tileLayer(mapTheme + '/{z}/{x}/{y}{r}.png').addTo(this.leafletMap);
  }

  update(): void {
    this.marker.setLatLng(this.coords)
    this.leafletMap.setView(this.coords, 13);

  }

}
