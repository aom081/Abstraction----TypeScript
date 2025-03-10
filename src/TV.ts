import { Device } from "./Device";

export class TV implements Device {
    turnOn(): void {
        console.log("TV is turned on");
    }
    turnOff(): void {
        console.log("TV is turned off");
    }
}