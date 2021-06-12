import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as L from 'leaflet';

const mapTheme = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark';

const myIcon = L.icon({
  iconUrl: './assets/marker_white.png',
  iconSize: [66, 82],
  iconAnchor: [32, 80],
});


@Component({
  selector: 'fb-leaflet-map',
  template: `
    <div #host style="width: 400px; height: 300px"></div>
  `,
})
export class LeafletMapComponent implements OnChanges {
  @Input() coords: [number, number] = [1,1];
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLInputElement>;
  leafletMap!: L.Map;
  marker!: L.Marker;

  ngOnChanges( changes: SimpleChanges): void {
    if (changes.coords.isFirstChange()) {
      this.initMap();
    } else {
      this.updateMap();
    }
  }

  initMap(): void {
    this.leafletMap = L.map(this.host.nativeElement).setView(this.coords, 13);
    this.leafletMap.attributionControl.setPrefix('Talent Factory')
    this.marker = L.marker(this.coords, {icon: myIcon}).addTo(this.leafletMap);
    L.tileLayer(mapTheme + '/{z}/{x}/{y}{r}.png').addTo(this.leafletMap);
  }

  updateMap(): void {
    this.marker.setLatLng(this.coords)
    this.leafletMap.setView(this.coords, 13);
  }

}
