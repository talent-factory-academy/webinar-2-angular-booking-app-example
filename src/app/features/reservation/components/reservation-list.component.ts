import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs/operators';
import { Site } from '../../../model/site';

@Component({
  selector: 'fb-reservation-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="list-header">
      <h2>Book an appointment <br>with your bank</h2>
      <mat-form-field class="example-form-field">
        <mat-label>Filter by name</mat-label>
        <input matInput type="text" [formControl]="input">
        <button matSuffix mat-icon-button aria-label="Clear"
                (click)="input.setValue('')">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>

    <div class="list-content">
      <mat-list>
        <mat-list-item matRipple (click)="itemClick.emit(null)">
          <mat-icon mat-list-icon>map</mat-icon>
          <div mat-line>View all</div>
        </mat-list-item>

        <ng-container *ngFor="let item of items | search: (input$ | async)">
          <mat-divider></mat-divider>
          <mat-list-item
            matRipple
            [disabled]="selectedSite?.id === item.id"
            (click)="itemClick.emit(item)"
          >
            <mat-icon mat-list-icon>place</mat-icon>
            <div mat-line>{{item.name}}</div>
          </mat-list-item>
        </ng-container>

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
  @Input() items!: Site[] | null;
  @Input() selectedSite!: Site | null;
  @Output() itemClick = new EventEmitter<Site | null>()

  input: FormControl = new FormControl()
  input$ = this.input.valueChanges
    .pipe(
      debounceTime(1000),
      startWith(''),
    );

}
