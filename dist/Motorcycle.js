"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricMotorcycle = exports.Motorcycle = void 0;
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.Vehicle {
    startEngine() {
        console.log("Motorcycle engine started");
    }
    stopEngine() {
        console.log("Motorcycle engine stopped");
    }
}
exports.Motorcycle = Motorcycle;
class ElectricMotorcycle extends Motorcycle {
    chargeBattery() {
        console.log("Electric motorcycle battery is charging");
    }
}
exports.ElectricMotorcycle = ElectricMotorcycle;
