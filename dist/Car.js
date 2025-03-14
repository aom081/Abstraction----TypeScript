"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyingCar = exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    startEngine() {
        console.log("Car engine started");
    }
    stopEngine() {
        console.log("Car engine stopped");
    }
}
exports.Car = Car;
class FlyingCar extends Car {
    fly() {
        console.log("Flying car is flying");
    }
}
exports.FlyingCar = FlyingCar;
