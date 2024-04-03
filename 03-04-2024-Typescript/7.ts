//--------------------------------------------------------
//interfaces in oops
// Interface for Animal
interface Animal {
    name: string;
    eat(): void;
}

// Interface for Dog extending Animal
interface Dog extends Animal {
    bark(): void;
}

// Class implementing Dog interface
class Labrador implements Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Implementation of eat method from Animal interface
    eat(): void {
        console.log(`${this.name} is eating`);
    }

    // Implementation of bark method from Dog interface
    bark(): void {
        console.log(`${this.name} is barking`);
    }
    makesoud(){
        this.bark();
    }
}

// Usage
let dog = new Labrador("Mara");
dog.eat(); 
dog.bark(); 
dog.makesoud();

//assignment - diff b/w abstarction and interface