import { PaymentEntryType } from '../constants/payment-obligation.enum';

export interface IPaymentObligation {
    payer: string;
    amount: number;
    recipient: string;
  }
  
  interface IPaymentEntry {
    name: string;
    type: PaymentEntryType
    amount: number;
  }

  interface IDebt {
    name: string;
    amount: number;
  }
  
  interface IOverage {
    name: string;
    amount: number;
  }
  
  export interface IPayDto {
    activeEntries?: IPaymentEntry[];
    payers: IDebt[];
    owees: IOverage[];
    pos: IPaymentObligation[];
  }