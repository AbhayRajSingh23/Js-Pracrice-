// Immediately Invoked Function Expressions (IIFE)

//Used to avoid polluting the global namespace and Execute the fucntion immediately (1)(2), 1: is used to declare the function 2: is used to call the function 

//these are two methods 1st is when its named and 2nd is when it is unnamed or like arrow function 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                       //(;) is important between two IIFE to know when the code ends

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')                               //parameters and arguments are also avaliable 