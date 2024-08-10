// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  //=> adds at the end 
// myArr.push(7) 
// myArr.pop()      //=> removes from the last pushed element (do not require any attribute)

// myArr.unshift(9) //=> adds the element at the 0th index and right shift every thing
// myArr.shift()    //=>same as pop + unshift means remove from the oth index

// console.log(myArr.includes(9));  //=>retutrn boolean value 
// console.log(myArr.indexOf(3));   

// const newArr = myArr.join()  //=> converts the array into string including commas by defalt, [const newArr = myArr.join('-'); this will add (-) in between 


// console.log(myArr);
// console.log( newArr);


// slice, splice
/*
######## IMPORTANT NOTE ########
1. slice()
Purpose: slice() is used to create a shallow copy of a portion of an array into a _new array_.

===========> Does Not Modify the Original Array: The original array remains unchanged. <===========

Parameters:

Start index (required): The index at which to begin the extraction.
End index (optional): The index before which to end the extraction. The element at this index is not included. If omitted, it extracts through the end of the array.
Returns: A new array containing the selected elements.

2. splice()
Purpose: splice() is used to add, remove, or replace elements in an array.

===========> Modifies the Original Array: The original array is modified. <=============

Parameters:

Start index (required): The index at which to start changing the array.
Delete count (optional): The number of elements to remove from the start index. If 0, no elements are removed.
Items to add (optional): The elements to add to the array starting at the start index.
Returns: An array containing the deleted elements (if any).
*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);