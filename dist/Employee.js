"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getdetails() {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}
exports.Employee = Employee;
