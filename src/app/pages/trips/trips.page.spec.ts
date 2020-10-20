import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsPage } from './trips.page';
import { TripsService } from './trips.service';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when OnInit called fetchTrips should be called once', () => {
    component.ngOnInit();
    expect(mockService.fetchTrips.calls.count()).toBe(1);
  });

});
