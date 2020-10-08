import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsPage } from './trips.page';
import { TripsService } from './trips.service';
import { of } from 'rxjs';

describe('Given TripsPage', () => {
  let component: TripsPage;
  let mockService: jasmine.SpyObj<TripsService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TripsService', ['fetchTrips']);

    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      imports: [IonicModule.forRoot()],
      providers: [
        TripsPage,
        { provide: TripsService, useValue: spy }
      ]
    });

    component = TestBed.inject(TripsPage);
    mockService = TestBed.inject(TripsService) as jasmine.SpyObj<TripsService>;
  });

  it('when instantiated then it should be created with empty state object', () => {
    expect(component.trips).toEqual([]);
  });

  it('when OnInit called then it should have correct trips state', () => {
    const mockTrip = { title: '', total: 0, average: 0, students: [], expenses: [] }
    mockService.fetchTrips.and.returnValue(of([mockTrip]));
    component.ngOnInit();
    expect(component.trips).toEqual([mockTrip]);
  });

});
