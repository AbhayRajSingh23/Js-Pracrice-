//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
/*
The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
Read the iterative methods section for more information about how these methods work in general.
*/
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)                    //this is chaining

console.log(newNums);