import { Payment } from "./Payment";

export class PayPalPayment implements Payment {
    private _email: string;
    constructor(email: string) {
        this._email = email;
    }
    get email(): string {
        return this._email;
    }
    pay(amount: number): void {
        console.log("Paying with PayPal: ", amount);
    }
}