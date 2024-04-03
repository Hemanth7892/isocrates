//Type Inference

function add(a, b) {
    return a + b;
}
const result = add(5, 3);
console.log(result); 

//multiply array

const numbers1 = [10, 20, 30, 40];
const multipliedNumbers1 = [];

for (let i = 0; i < numbers1.length; i++) {
    multipliedNumbers.push(numbers1[i] * 3);
}

console.log(multipliedNumbers1); 

//another approach to multiply array by 3 using foreach

numbers.forEach(num=>console.log(num*3))

//create a function which accepts the string parameter to lowercase to uppercase 
function convertToUpperCase(str: string): string {
    return str.toUpperCase();
}

const lowercaseStr = "isocrates";
const uppercaseStr = convertToUpperCase(lowercaseStr);
console.log(uppercaseStr); 
