export abstract class Employee {
    constructor(protected name: string, protected salary: number) {
    }
    abstract calculateSalary(): number;
    getdetails(): string {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}

