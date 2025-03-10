import { Shape } from "./Shape";
import { Color } from "./Color";
export class Rectangle extends Color implements Shape {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super("Red", false);
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    draw(): void {
        console.log("Drawing Rectangle with width: ", this.width, " and height: ", this.height);
    }
}