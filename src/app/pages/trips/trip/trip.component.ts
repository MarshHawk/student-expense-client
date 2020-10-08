import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from 'src/app/shared/interfaces/student.interface';
import { ITrip } from 'src/app/shared/interfaces/trip.interface';
import { IPaymentObligation, IPayDto } from 'src/app/shared/interfaces/payment-obligation.interface';

export interface ITripUiState {
  showStudentExpenseTotals: boolean;
  showPaymentObligations: boolean;
  showExpenseDetails: boolean;
}

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent{

  @Input() trip: ITrip;
  paymentObligations: IPaymentObligation[] =[];
  uiState: ITripUiState = {
    showStudentExpenseTotals: false,
    showPaymentObligations: false,
    showExpenseDetails: false
  };

  constructor() { }

  public handleCalculate() {
    this.paymentObligations = this._calculatePaymentObligation(this.trip);
    this.uiState.showPaymentObligations = !this.uiState.showPaymentObligations;
  }

  private _calculatePaymentObligation(trip: ITrip) {
    const reducer = (payDto:IPayDto, student: IStudent) => {
      if (student.total_trip_expenses < trip.average){
        let currentTotal = trip.average - student.total_trip_expenses;
        let paymentAmount = 0;
        for (let payer of [...payDto.payers].filter(p => p.amount !== 0)) {
          paymentAmount = payer.amount > currentTotal ? currentTotal : payer.amount;
          payer.amount -= paymentAmount;
          payDto.pos.push({payer:payer.name, recipient:student.name, amount: Math.round( paymentAmount * 1e2)/1e2});
        }
        payDto.owees.push({name: student.name, amount: currentTotal - paymentAmount})
      }
      else if (student.total_trip_expenses > trip.average) {
        let currentTotal = student.total_trip_expenses - trip.average;
        let debtAmount = 0;
        for (let owee of [...payDto.owees].filter(o => o.amount !== 0)) {
          debtAmount = owee.amount > currentTotal ? currentTotal : owee.amount;
          owee.amount -= debtAmount;
          payDto.pos.push({payer:student.name, recipient: owee.name, amount: Math.round( debtAmount * 1e2)/1e2});
        }
        payDto.payers.push({name: student.name, amount: currentTotal})
      } 
      return payDto;
    }
    return trip.students.reduce(reducer, {owees:[], payers:[], pos:[]}).pos;
  }

}
