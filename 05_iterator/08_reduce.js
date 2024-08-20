/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
 in order, passing in the return value from the calculation on the preceding element.
 The final result of running the reducer across all elements of the array is a single value. 
*/

//-------------description ------------

/*
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. 
For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array reduce() was called upon.

*/

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)             //=>need to provide initial value to begin with.

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);