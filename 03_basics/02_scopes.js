//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))              //=>this shows no problem 

function addone(num){
    return num + 1
}

//=> if we define fuction as below [i.e. fuction is stored in variable] it can not be called before initialization 

addTwo(5)           //=>this shows error as the fuction is called and stored in variable and specifically varible needs to initialte at the instance when line pointer reaches the line 
const addTwo = function(num){
    return num + 2
}