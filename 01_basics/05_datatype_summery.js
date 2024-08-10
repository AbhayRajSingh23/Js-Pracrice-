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
console.log("***********************************************")
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

//*************************************************************************************** */
// Stack(Primitive) and heap(Non-Primitive) memomry.....

//Primitive memory is call by value that means copy of value is passed when called
let name = "Sighania";
let anotherName =name;
anotherName = "Rajpoot";
console.log(name)
console.log(anotherName)

console.log("********************************")

//Non-Primitvive memory is call by refernce value that means refernce of the is passed
let userone ={
    email : "jaibabaki@omshanti.com" ,
    upi: "donate@jaiho"
}
let usertwo = userone;
usertwo.email = "money@give"
console.log(userone);
console.log(usertwo);           //here the change in usertwo changes the userone details as it is in heap memory i.e. a refernce memory 
                                                //(both the variable points the same refernce of variable) 


