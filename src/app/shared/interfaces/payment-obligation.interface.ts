export interface IPaymentObligation {
    payer: string;
    amount: number;
    recipient: string;
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
    payers: IDebt[];
    owees: IOverage[];
    pos: IPaymentObligation[];
  }