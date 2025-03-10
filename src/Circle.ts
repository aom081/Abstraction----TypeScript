import { Shape } from "./Shape";

export class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }
    getPerimeter(): number {
        return parseFloat((2 * Math.PI * this.radius).toFixed(2));
    }

    draw(): void {
        console.log("Drawing Circle with radius: ", this.radius);
    }
}