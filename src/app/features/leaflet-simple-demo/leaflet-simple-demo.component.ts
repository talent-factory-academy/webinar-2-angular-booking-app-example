import { Component, OnInit } from '@angular/core';
import { Coords } from '../../model/site';

@Component({
  selector: 'fb-leaflet-simple-demo',
  template: `
    <h1>Simple Leaflet Map demo component</h1>
    <fb-leaflet-map [coords]="coords"></fb-leaflet-map>
    <button (click)="coords = [50, 12]">Position 1</button>
    <button (click)="coords = [51, 11]">Position 2</button>
  `,
})
export class LeafletSimpleDemoComponent  {
  coords: Coords = [43, 13];

}
