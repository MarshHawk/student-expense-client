import { TripsService } from "./trips.service";
import { of } from 'rxjs';

describe('Given TripsService', () => {
    
    it('when fetching trips then HttpClient should be called only once', () => {
        // Arrange
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        const tripsService = new TripsService(httpClientSpy as any);
        httpClientSpy.get.and.returnValue(of([]));

        // Act
        tripsService.fetchTrips().subscribe();

        // Assert
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

     it('when fetching trips then correct result should be reutrned on subscribe', () => {
        // Arrange
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        const tripsService = new TripsService(httpClientSpy as any);
        httpClientSpy.get.and.returnValue(of([]));

        // Act
        tripsService.fetchTrips().subscribe((result) => {
            // Assert
            expect(result).toEqual([], 'expected trips'),
                fail
        });

    });

})