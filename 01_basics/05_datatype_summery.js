/*There are two type of datatype
1: PRIMITIVE
2: REFERENCE (non-primitive) */

//Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbols(to define unique characters), BigInt
let tempature = null;
let valueNow; //undefined 
let myInt = 435645256564n  //BigInt
let mySymbol1 = Symbol('123')
let mySymbol2 = Symbol('123')


//Refernce (non-primitive)

// Array, Object, Function

const arr= ["Amit", "Raj", "Kunal"] // array

let myObj = {                      //defined object 
    tool: "Hammer" ,
    work: "batting"
}

const myFunction = function(){      //function
    console.log("hello world")
}

console.log("***********************************************")
console.log(typeof myFunction)
/* these are primitive
// typeof null => object
// typeof undefined => undefined
// typeof myInt(BigInt) => bigint
// typeof symbol => symbol
*/

/* these are refrence
// array => object
// typeof object => object
// typeof function => function (object function)
 */