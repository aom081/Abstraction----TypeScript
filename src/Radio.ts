import { Device } from "./Device";

export class Radio implements Device {
    turnOn(): void {
        console.log("Radio is turned on");
    }
    turnOff(): void {
        console.log("Radio is turned off");
    }
}