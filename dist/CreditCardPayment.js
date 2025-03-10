"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    constructor(creditNumber) {
        this._creditNumber = creditNumber;
    }
    get creditNumber() {
        return this._creditNumber;
    }
    pay(amount) {
        console.log("Paying with credit card: ", amount);
    }
}
exports.CreditCardPayment = CreditCardPayment;
