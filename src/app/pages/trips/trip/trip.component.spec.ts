import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TripComponent } from './trip.component';

describe('TripComponent', () => {
  let component: TripComponent;
  let fixture: ComponentFixture<TripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [TripComponent]
    }).compileComponents();

    component = TestBed.inject(TripComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when instantiated then it should be created with correct initial state', () => {
    expect(component.trip).toEqual(undefined);
    expect(component.paymentObligations).toEqual([]);
    expect(component.uiState).toEqual({
      showStudentExpenseTotals: false,
      showPaymentObligations: false,
      showExpenseDetails: false
    });
  });

  it('when calculate payments called then it should have correct paymentObligations', () => {
    const mockTrip = {
      title: '', total: 0, expenses: [],
      average: 72.39,
      students: [{
        name: 'a',
        total_trip_expenses: 53.54
      }, {
        name: 'b',
        total_trip_expenses: 50.23
      }, {
        name: 'c',
        total_trip_expenses: 113.41
      }]
    }

    const expectedPaymentObligations = [
      {
        payer: 'c',
        amount: 18.85,
        recipient: 'a'
      },
      {
        payer: 'c',
        amount: 22.16,
        recipient: 'b'
      }]
    component.trip = mockTrip
    component.handleCalculate();
    expect(component.paymentObligations).toEqual(expectedPaymentObligations);
  });

  it('when calculate payments called with one payee last then it should have correct paymentObligations', () => {
    const mockTrip = {
      title: '', total: 0, expenses: [],
      average: 72.39,
      students: [{
        name: 'a',
        total_trip_expenses: 53.54
      }, {
        name: 'b',
        total_trip_expenses: 50.23
      }, {
        name: 'c',
        total_trip_expenses: 113.41
      }]
    }

    const expectedPaymentObligations = [
      {
        payer: 'c',
        amount: 18.85,
        recipient: 'a'
      },
      {
        payer: 'c',
        amount: 22.16,
        recipient: 'b'
      }]

    component.trip = mockTrip
    component.handleCalculate();
    expect(component.paymentObligations).toEqual(expectedPaymentObligations);
  });

  it('when calculate payments called with one payee second then it should have correct paymentObligations', () => {
    const mockTrip = {
      title: '', total: 0, expenses: [],
      average: 75.11,
      students: [{
        name: 'a',
        total_trip_expenses: 5.75
      }, {
        name: 'b',
        total_trip_expenses: 250.62
      }, {
        name: 'c',
        total_trip_expenses: 34.08
      },
      {
        name: 'l',
        total_trip_expenses: 10
      }]
    }

    const expectedPaymentObligations = [
      {
        payer: 'b',
        amount: 69.36,
        recipient: 'a'
      },
      {
        payer: 'b',
        amount: 41.03,
        recipient: 'c'
      },
      {
        payer: 'b',
        amount: 65.11,
        recipient: 'l'
      }]

    component.trip = mockTrip;
    component.handleCalculate();
    expect(component.paymentObligations).toEqual(expectedPaymentObligations);
  });

  it('when calculate payments called with multiple payees then it should have correct paymentObligations', () => {
    const mockTrip = {
      title: '', total: 0, expenses: [],
      average: 17.95,
      students: [
        { name: "A", total_trip_expenses: 18.54 },
        { name: "B", total_trip_expenses: 12 },
        { name: "C", total_trip_expenses: 4.22 },
        { name: "L", total_trip_expenses: 10 },
        { name: "D", total_trip_expenses: 45 }]
    }

    //1.59

    const expectedPaymentObligations = [
      {
        payer: 'A',
        amount: 0.59,
        recipient: 'B'
      },
      {
        payer: 'D',
        amount: 5.36,
        recipient: 'B'
      },
      {
        payer: 'D',
        amount: 13.73,
        recipient: 'C'
      },
      {
        payer: 'D',
        amount: 7.95,
        recipient: 'L'
      }]

    component.trip = mockTrip;
    component.handleCalculate();
    console.log('actual payments');
    console.log(component.paymentObligations);
    expect(component.paymentObligations).toEqual(expectedPaymentObligations);
  });

});
