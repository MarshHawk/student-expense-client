import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITrip } from 'student-expense-types';
import { Apollo } from 'apollo-angular';
import gql from "graphql-tag";
import { ITripResult } from 'src/app/shared/interfaces/trip-connection.interfaces';

const query = gql`{
  tripsConnection {
    edges {
      node {
        id
        title
        total
        average
        students {
          name
          totalTripExpenses
        }
        expenses {
          studentName
          amount
        }
      }
    }
  }
}`;

@Injectable({
    providedIn: 'root'
})
export class TripsService {
    constructor(private _apollo: Apollo) { }

/*     public fetchTrips(): Observable<ITrip[]> {
        return this.http.get<ITrip[]>(environment.trips_api.endpoint + 'trips').pipe(
            map(response => response)
        );
    } */

    public getTripsConnection(): Observable<ITripResult> {
        return this._apollo.watchQuery<ITripResult>({query}).valueChanges.pipe(
            map(response => response.data)
        );
    }

    public getTrips(): Observable<ITrip[]> {
        return this.getTripsConnection().pipe(map(results => results.tripsConnection.edges.map(e => e.node)));
    }
}