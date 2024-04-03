// // // //OOP's Class
// // class Person {
// //     name: string;
// //     age: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }
// //     greet() {
// //         console.log(`My name is ${this.name} and my age is ${this.age}`);
// //     }
// // }
// // const p1 = new Person("Hemanth", 24);
// // p1.greet();
// // //Access Modifiers 
// // class Employee {
// //     private name: string;
// //     private salary: number;
// //     constructor() {
// //         this.salary = 20000;
// //     }
// //     hike() {
// //         this.salary = this.salary * 1.1;
// //     }
// //     getSalary(): number {
// //         return this.salary;
// //     }
// //     // Setter for salary
// //     setSalary(salary: number): void {
// //         this.salary = salary;
// //     }
// // }
// // // Create an instance of Employee
// // const harsh = new Employee();
// // harsh.setSalary(50000);
// // console.log(harsh.getSalary()); 
// // harsh.hike();
// // console.log(harsh.getSalary());
// // //Read only 
// // class Employee1 {
// //     private name: string;
// //     private readonly salary: number; // Use readonly keyword
// //     constructor(name: string, salary: number) {
// //         this.name = name;
// //         this.salary = salary;
// //     }
// //     hike() {
// //         console.log("Salary cannot be hiked for this employee.");
// //     }
// //     getSalary(): number {
// //         return this.salary;
// //     }
// // }
// // // Create an instance of Employee
// // const harsh1 = new Employee1("Harsh", 50000);
// // console.log(harsh1.getSalary()); // Output: 50000
// //----------------------------------
// //Inheritance 
// class Person1 {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     introduce() {
//         console.log(`Hi, my name is ${this.name}.`);
//     }
// }
// class Student extends Person1 {
//     private grade: string;
//     constructor(name: string, grade: string) {
//         super(name);
//         this.grade = grade;
//     }
//     study() {
//         console.log(`${this.name} is studying.`);
//     }
//     showGrade() {
//         console.log(`${this.name} is in grade ${this.grade}.`);
//     }
// }
// // Create an instance of Student
// const student1 = new Student("Manu", "10th");
// student1.introduce();
// student1.study();
// student1.showGrade(); 
//Abstarct class 
var CompanyLaws = /** @class */ (function () {
    function CompanyLaws() {
    }
    return CompanyLaws;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Company.prototype.salaryDate = function () {
        console.log('Salary date is last day of every month');
    };
    return Company;
}(CompanyLaws));
var isocrates = new Company();
isocrates.salaryDate();
