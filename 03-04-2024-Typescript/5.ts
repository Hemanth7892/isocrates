//Optional parameters: function
function greet(name?:string):void{
    if(name){
        console.log(`Hello ${name} `);
    }
    else{
        console.log("Hello New User");
    }
}

greet();
greet("Virat");


//Default parameter
// Optional parameters: function
function greet1(name: string = "Guest"): void {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greet1(); // Output: Hello Guest as default parameter 
greet1("Virat"); 


//Accessing Rest Parameters 
function sum(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(10, 20, 30, 40, 50)); 

//Function overloading 
function reverse(arr: number[]): number[];
function reverse(str: string): string;
function reverse(value: number[] | string): number[] | string {
    if (Array.isArray(value)) {
        return value.slice().reverse();
    } else if (typeof value === 'string') {
        return value.split('').reverse().join('');
    } else {
        throw new Error('Invalid input type');
    }
}

console.log(reverse([1, 2, 3, 4, 5])); 
console.log(reverse("isocrates")); 





