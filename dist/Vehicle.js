"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}
exports.Vehicle = Vehicle;
