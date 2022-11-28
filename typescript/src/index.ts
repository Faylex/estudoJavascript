// string, boolean, number, ...
let x:number = 10;

x - 16;

console.log(x);

//inferencia x annotation
let y = 12 

// y = "teste"

let z: number = 12;

// tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

//String != string

console.log(typeof firstName);

firstName = "João";

console.log(firstName);

//object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
//  console.log(myNumbers.toUpperCase())
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

//tuplas -> tuple
let myTuple: [number, string, string[]];

