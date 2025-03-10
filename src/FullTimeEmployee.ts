import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }
    calculateSalary(): number {
        return this.salary * 0.1;
    }
}