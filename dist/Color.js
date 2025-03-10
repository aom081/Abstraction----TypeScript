"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
class Color {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    fillShape(isfilled) {
        this.filled = isfilled;
    }
    isfilled() {
        return this.filled;
    }
}
exports.Color = Color;
