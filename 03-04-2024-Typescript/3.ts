let counter: number = 12;
let active: boolean = true;

//Array
let ArrayNAME: String[] = ['Hemanth','Manoj','Pratheek'];

//Object
let person:{
    name:string;
    age:number;
};


person = {
    name:'Heraksh',
    age:5
};

let greeting: (name: string) => string;
greeting = function(name: string) {
    console.log('Hi ' + name);
    return 'Hi ' + name;
};

greeting("Hemanth");
