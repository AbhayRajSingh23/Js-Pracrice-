// const tinderUser = new Object()  //=>this is how Singleton object is created
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {           //=> we cane make nested object i.e. object with in object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Lokesh",
            lastname: "Panda"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);        //=> this is how we can reach nesting (we also use '?' after the keys if it is uncertain that the field exist or not)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                                      //=> No.1 method    [this creates object within object]
// const obj3 = Object.assign({}, obj1, obj2, obj4)                 //=> No.2 method    
const obj3 = {...obj1, ...obj2}                                     //=> No.3 method [of merging two or more object (just like array were done!) , this method is laest and ez]
// console.log(obj3);


const users = [                                                     //=> puuting objects in array so they are ezy for accessing (real world scenario)
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email                                          //=> printing/accessing out the specific value calling key in array 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));                //=> accessing keys in form of array
// console.log(Object.values(tinderUser));              //=> accessing values in form of array
// console.log(Object.entries(tinderUser));             //=> accessing both key & values in form of 2Darray

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));            //=> checks for the keys and return boolean value


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]