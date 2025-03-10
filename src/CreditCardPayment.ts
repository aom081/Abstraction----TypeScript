import { Payment } from './Payment';
export class CreditCardPayment implements Payment {
    private _creditNumber: number;

    constructor(creditNumber: number) {
        this._creditNumber = creditNumber;
    }

    get creditNumber(): number {
        return this._creditNumber;
    }
    pay(amount: number): void {
        console.log("Paying with credit card: ", amount);
    }
}