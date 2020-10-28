import { TripsService } from "./trips.service";
import { of } from 'rxjs';

describe('Given TripsService', () => {
    
/*     it('when fetching trips then ApolloClient should be called only once', () => {
        // Arrange
        //const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        const apolloSpy = jasmine.createSpyObj('Apollo', ['watchQuery']);
        const tripsService = new TripsService(apolloSpy as any);
        apolloSpy.watchQuery.and.returnValue(of({}));

        // Act
        tripsService.getTrips().subscribe();

        // Assert
        expect(apolloSpy.get.calls.count()).toBe(1, 'one call');
    }); */

/*      it('when fetching trips then correct result should be reutrned on subscribe', () => {
        // Arrange
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        const tripsService = new TripsService(httpClientSpy as any);
        httpClientSpy.get.and.returnValue(of([]));

        // Act
        tripsService.getTrips().subscribe((result) => {
            // Assert
            expect(result).toEqual([], 'expected trips'),
                fail
        });

    }); */

})