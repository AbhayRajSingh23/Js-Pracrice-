// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Singham",
    "full name": "Singham Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "lala@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])     //specific ccall of object 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])            //symbol is imp. it is saked in interviews as it is initiated as in [mySymbol] and called like[mySymbol]

JsUser.email = "lala@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "lala@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());