import { map } from 'rxjs/operators';
import { pipe, MonoTypeOperatorFunction } from 'rxjs';
import { IPaymentObligation } from '../interfaces/payment-obligation.interface';

export function calculatePayment(): MonoTypeOperatorFunction<IPaymentObligation[]> {
    return pipe(
      map((result: any) => JSON.parse(JSON.stringify(result, (k, v) => (k === "__typename") ? undefined : v)))
    );
  }