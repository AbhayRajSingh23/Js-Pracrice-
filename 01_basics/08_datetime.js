// Dates

let myDate = new Date()
// console.log(myDate.toString());       //=> return the date and time in regural format like Day Mon. DD YYYY hh:mm:ss time zone 
// console.log(myDate.toDateString());  //=> return the date and time in format like Day Mon. DD YYYY
// console.log(myDate.toLocaleString());   //=> returns the date and time in format MM/DD/YYY hh:mm:ss pm/am
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)     // here month start from 00 i.e. January 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// let myCreatedDate = new Date("2023-01-14") // YYYY-MM-DD
// let myCreatedDate = new Date("01-14-2023") //MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})