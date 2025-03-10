"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployee = void 0;
const Employee_1 = require("./Employee");
class FullTimeEmployee extends Employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    calculateSalary() {
        return this.salary * 0.1;
    }
}
exports.FullTimeEmployee = FullTimeEmployee;
