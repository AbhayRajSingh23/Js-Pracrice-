const name = "sarju"
const repoCount = 50

// console.log(name + repoCount + " Value");      //new coders dont follow this approach 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // we now use this 

const gameName = new String('hitesh-hc-com')    // declaration of new string object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //takes only positive characters 
console.log(newString);

const anotherString = gameName.slice(-8, 4) //also takes negative characters
console.log(anotherString);

const newStringOne = "   punjabi    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the white spaces and new line characters (/n), [trimStart() , trimEnd()] are also there.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// for extra knowledge or revision visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods 