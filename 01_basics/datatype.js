/*
numer => 2 to power 53
bigint
string => ""
boolean => true/false
null => object
undefined 
*/ 



//***********************type casting now******************************

let score = "3498"
console.log(typeof score);
let valueOfString = Number(score);
console.log(typeof (valueOfString));
console.log("..........................");
/*
"33" => number
"33abc" => NaN
"String" => NaN
boolean  true / false => 1 / 0
null => 0
undefined => NaN
*/


let tea = 1
console.log(typeof score);
let valueOfTea = Boolean(tea);
console.log(valueOfTea)
console.log("..........................");
/*
1 => true; 0 => false
"" empty string => false;  "hello" => true  
*/

let number = 56 
let stringNum = String(number)
console.log(stringNum);
console.log(typeof stringNum);
console.log("..........................");