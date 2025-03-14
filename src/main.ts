import { Employee } from "./Employee";
import { FullTimeEmployee } from "./FullTimeEmployee";
import { PartTimeEmployee } from "./PartTimeEmployee";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { TV } from "./TV";
import { Radio } from "./Radio";
import { PayPalPayment } from "./PayPalPayment";
import { CreditCardPayment } from "./CreditCardPayment";
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";
import { FlyingCar } from "./Car";
import { ElectricMotorcycle } from "./Motorcycle";

const emp = new FullTimeEmployee("John", 50000);
console.log("-----------------Full Time Employee-----------------");
console.log(emp.getdetails());
console.log("Salary: ", emp.calculateSalary());

const emp1 = new PartTimeEmployee("David", 20000);
console.log("-----------------Part Time Employee-----------------");
console.log(emp1.getdetails());
console.log("Salary: ", emp1.calculateSalary());

const rect = new Rectangle(10, 20);
console.log("----------------Rectangle----------------");
console.log("Area: ", rect.getArea());
console.log("Perimeter: ", rect.getPerimeter());
console.log("Color: ", rect.getColor());
rect.draw();

const circle = new Circle(10);
console.log("-----------------Circle-----------------");
console.log("Area: ", circle.getArea());
console.log("Perimeter: ", circle.getPerimeter());
circle.draw();

console.log("-----------------Animal-----------------");
const dog = new Dog();
console.log("---------------Dog Sound----------------");
dog.makeSound();
const cat = new Cat();
console.log("---------------Cat Sound----------------");
cat.makeSound();

console.log("-----------------Device-----------------");
const tv = new TV();
console.log("--------------- TV ----------------");
console.log("Turn On: ");
tv.turnOn();
console.log("Turn Off: ");
tv.turnOff();
const radio = new Radio();
console.log("--------------- Radio ----------------");
console.log("Turn On: ");
radio.turnOn();
console.log("Turn Off: ");
radio.turnOff();

console.log("-----------------Payment-----------------");
const paypal = new PayPalPayment("644259014@webmail.npru.ac.th");
console.log("--------------- PayPal Payment ----------------");
paypal.pay(100);

const creditCard = new CreditCardPayment(644259014);
console.log("--------------- Credit Card Payment ----------------");
creditCard.pay(200);

console.log("-----------------Vehicle-----------------");
console.log("--------------- Car ----------------");
const car = new Car("Toyota", "Corolla");
console.log(car.getDetails());
car.startEngine();
car.stopEngine();

console.log("--------------- Motorcycle ----------------");
const motorcycle = new Motorcycle("Honda", "CBR");
console.log(motorcycle.getDetails());
motorcycle.startEngine();
motorcycle.stopEngine();

console.log("--------------- Flying Car ----------------");
const flyingCar = new FlyingCar("Tesla", "Model F");
console.log(flyingCar.getDetails());
flyingCar.startEngine();
flyingCar.fly();
flyingCar.stopEngine();

console.log("-----------------Electric Vehicle-----------------");
const electricMotorcycle = new ElectricMotorcycle("Zero", "SR/F");
console.log(electricMotorcycle.getDetails());
electricMotorcycle.startEngine();
electricMotorcycle.chargeBattery();
electricMotorcycle.stopEngine();
