import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITrip } from 'src/app/shared/interfaces/trip.interface';

@Injectable({
    providedIn: 'root'
})
export class TripsService {

    constructor(private http: HttpClient) {}

    public fetchTrips(): Observable<ITrip[]> {
        return this.http.get<ITrip[]>(environment.trips_api.endpoint + 'trips').pipe(
            map(response => response)
        );
    }
}