const number = 400;
console.log(number);
// how to contruct strict number
const num = new Number(444)
console.log(num);

//some functions for number
/*
 num.toExporntial   =>
 num.toFixed        => returns the decimal form of this eg: 
 num.toLocaleSrting => returns the comas in number, ('en-IN') attribute gives the comas in Indian form
 num.toSrting       =>conert the number into the string (now then we can perform the operations of strings on the number's string)
 num.toPrecision    => returns the precision value of the number to the value entered (number entered is to be btw 1-21)
 num.toValueof      =>
 */
console.log(typeof num.toString);
console.log(num);

// console.log(num.toString().length);
// console.log(num.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Defining Min value and Max value from a random number