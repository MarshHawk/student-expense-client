import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TripsService } from './trips.service';
import { ITrip } from 'src/app/shared/interfaces/trip.interface';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss']
})
export class TripsPage implements OnInit {

  public trips: ITrip[] = [];

  constructor(private _tripsService: TripsService) { }

  ngOnInit() {
    this._tripsService.fetchTrips().subscribe((result) => {
      this.trips = result;
    })
  }

}
