import { Component, OnInit } from '@angular/core';
import { TripsService } from './trips.service';
import { ITrip } from 'src/app/shared/interfaces/trip.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss']
})
export class TripsPage implements OnInit {

  public trips$: Observable<ITrip[]>;

  constructor(private _tripsService: TripsService) { }

  ngOnInit() {
    this.trips$ = this._tripsService.fetchTrips();
  }

}
