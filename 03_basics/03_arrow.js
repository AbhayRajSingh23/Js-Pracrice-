const user = {
    username: "Mannu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);               //=> this describes the objects
        console.log(this);                                                  //=> it will give all the discribtion about the object function
    }

}

// user.welcomeMessage()
// user.username = "sam"                            //=> it alters the value of username using this method
// user.welcomeMessage()

// console.log(this);                               //=> outside the scope this is undefined in node but in browser console this is valid and return window details 

// function chai(){
//      console.log(this);
// }
// chai()                                  //= the call chia() gives lots info that is encapsulated

// function chai(){
//     let username = "Mannu"
//     console.log(this.username);
// }

// chai()                                                  //=>***** chai fucntion return undefined as context is not defined yet 

//---------------------------ARROW FUNCTION-----------------------

// const chai = function () {
    //     let username = "Mannu"
    //     console.log(this.username);
    // }
    // chai()                                                  //=>***** chai fucntion return undefined as context is not defined yet 

const chai =  () => {                                       //=> this is an arrow function here it is differnt from above code as context is defined here
    let username = "Mannu"
    console.log(this);                                      //=> this return an empty {} 'object' but if we use this.someUsername then it will again return undefined
}

// chai() 

// const addTwo = (num1, num2) => {                         //=> this arrow functin act normall like other functions 
//     return num1 + num2                                   //=> //=>***** explicit return **********
// }

// const addTwo = (num1, num2) =>  num1 + num2              //=>***** implicit return ********** should be in same line

// const addTwo = (num1, num2) => ( num1 + num2 )           //=> other *proper way* of implicit return

const addTwo = (num1, num2) => ({username: "Mannu"})        // object has to be returned like this only else it will not work


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 