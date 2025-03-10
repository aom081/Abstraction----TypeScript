"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Color_1 = require("./Color");
class Rectangle extends Color_1.Color {
    constructor(width, height) {
        super("Red", false);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    draw() {
        console.log("Drawing Rectangle with width: ", this.width, " and height: ", this.height);
    }
}
exports.Rectangle = Rectangle;
