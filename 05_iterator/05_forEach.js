//=>************For Each loop is especially for the arrays****************
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){                      //=> this is how to use for each loop (array.forEach( _fuction_(arg){body} ) => since this fuctoin is call back so it do not have name.
//     console.log(val);
// } )

// coding.forEach( (item) => {                          //=> arrow function is also workable 
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)                              //=> even we can define function outside and then call it in loop 

// coding.forEach( (item, index, arr)=> {               //=> multiple arguments!! (item, index, arr) this will give each item and its index and whole array each time.
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {           //=>****also iterates objects****
    
    console.log(`name of language is ${item.languageName} and abbreviate is ${item.languageFileName}`);
} )