"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    constructor(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    pay(amount) {
        console.log("Paying with PayPal: ", amount);
    }
}
exports.PayPalPayment = PayPalPayment;
