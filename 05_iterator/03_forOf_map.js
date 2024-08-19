// for of           //=> directly iterates on the values 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
/*
In JavaScript, maps are a built-in data structure that allows you to store key-value pairs.
Unlike objects, the keys in a map can be of any data type, and the order of the keys is maintained.
The keys and values can be of any type, including objects or functions. 
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {               //=> if you write just key in [] then just keys will be given and if we use coma and write value then key value pair is returned.
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// =>********myObject is not iterable***********

// for (const [key, value] of myObject) {
//    console.log(key, ':-', value);
    
// }