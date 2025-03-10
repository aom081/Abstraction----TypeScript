# Guide: Setting Up a TypeScript Project with Abstraction

## 1. Create the Project Directory
Open a terminal and run the following command to create the main project folder:
```sh
mkdir "Abstraction ใน TypeScript"
cd "Abstraction ใน TypeScript"
```

## 2. Create Subdirectories
Inside the main project folder, create `src` and `dist` directories:
```sh
mkdir src dist
```

## 3. Initialize TypeScript Configuration
Run the following command to generate a `tsconfig.json` file:
```sh
tsc --init
```

## 4. Modify `tsconfig.json`
Replace the contents of `tsconfig.json` with the following configuration:
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

## 5. Create the `Employee.ts` File
Inside the `src` folder, create a file named `Employee.ts` and add the following class definition:
```ts
class Employee {
    private name: string;
    private position: string;
    
    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }
    
    getDetails(): string {
        return `Employee: ${this.name}, Position: ${this.position}`;
    }
}

export default Employee;
```

## 6. Create the `main.ts` File
Inside the `src` folder, create a file named `main.ts` and add the following code:
```ts
import Employee from "./Employee";

const emp = new Employee("John Doe", "Software Engineer");
console.log(emp.getDetails());
```

## 7. Compile TypeScript to JavaScript
Run the following command to compile the TypeScript files:
```sh
tsc
```

## 8. Run the Compiled JavaScript File
Navigate to the `dist` folder and execute the compiled JavaScript file:
```sh
cd dist
node main.js
```
