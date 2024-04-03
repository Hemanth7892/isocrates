//Optional parameters: function
function greet(name) {
    if (name) {
        console.log("Hello ".concat(name, " "));
    }
    else {
        console.log("Hello New User");
    }
}
greet();
greet("Virat");
//Default parameter
// Optional parameters: function
function greet1(name) {
    if (name === void 0) { name = "Guest"; }
    if (name) {
        console.log("Hello ".concat(name));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet1(); // Output: Hello Guest as default parameter 
greet1("Virat");
//Accessing Rest Parameters 
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return total;
}
console.log(sum(10, 20, 30, 40, 50));
function reverse(value) {
    if (Array.isArray(value)) {
        return value.slice().reverse();
    }
    else if (typeof value === 'string') {
        return value.split('').reverse().join('');
    }
    else {
        throw new Error('Invalid input type');
    }
}
// Test with an array of numbers
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse("isocrates"));
