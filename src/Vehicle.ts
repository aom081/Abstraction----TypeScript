export abstract class Vehicle {
    constructor(protected make: string, protected model: string) {}

    abstract startEngine(): void;
    abstract stopEngine(): void;

    getDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}