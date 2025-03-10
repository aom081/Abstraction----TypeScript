"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }
    getPerimeter() {
        return parseFloat((2 * Math.PI * this.radius).toFixed(2));
    }
    draw() {
        console.log("Drawing Circle with radius: ", this.radius);
    }
}
exports.Circle = Circle;
