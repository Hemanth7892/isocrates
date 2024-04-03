// Class implementing Dog interface
var Labrador = /** @class */ (function () {
    function Labrador(name) {
        this.name = name;
    }
    // Implementation of eat method from Animal interface
    Labrador.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    // Implementation of bark method from Dog interface
    Labrador.prototype.bark = function () {
        console.log("".concat(this.name, " is barking"));
    };
    Labrador.prototype.makesoud = function () {
        this.bark();
    };
    return Labrador;
}());
// Usage
var dog = new Labrador("Mara");
dog.eat();
dog.bark();
dog.makesoud();
//assignment - diff b/w abstarction and interface
