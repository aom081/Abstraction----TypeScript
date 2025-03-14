import { Vehicle } from "./Vehicle";
import { ElectricVehicle } from "./ElectricVehicle";

export class Motorcycle extends Vehicle {
    startEngine(): void {
        console.log("Motorcycle engine started");
    }

    stopEngine(): void {
        console.log("Motorcycle engine stopped");
    }
}

export class ElectricMotorcycle extends Motorcycle implements ElectricVehicle {
    chargeBattery(): void {
        console.log("Electric motorcycle battery is charging");
    }
}