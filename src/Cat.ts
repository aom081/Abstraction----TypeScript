import { Animal } from "./Animal";

export class Cat extends Animal {
    makeSound(): void {
        console.log("Meow Meow");
    }
}