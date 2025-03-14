import { Vehicle } from "./Vehicle";
import { Flyable } from "./Flyable";

export class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started");
    }

    stopEngine(): void {
        console.log("Car engine stopped");
    }
}

export class FlyingCar extends Car implements Flyable {
    fly(): void {
        console.log("Flying car is flying");
    }
}