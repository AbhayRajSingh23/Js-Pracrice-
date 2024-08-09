let score = 33
let negScore = -score
console.log(negScore);

 /* **********operation*************** */

//  console.log(2+2)
//  console.log(2-2)
//  console.log(2*2)
//  console.log(2**2)
//  console.log(2/2)
//  console.log(2%2)

// ***************concatination with strings
let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3)

console.log("************************")

console.log("1" + "2")
console.log("1" + 2)   //this will also concatinate
console.log("1" + 2 + 2)  //this will also concatinate
console.log(1 + 2 + "2")  // this will give 3 + "2" => 32 concatinated.       =====> this is because js reads line by line (according to ECMAScript)
