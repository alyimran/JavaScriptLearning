//Prototype
//every function that we create in javascript, comes with an
// almost emtpy object for us to use. We can add properties to it, functions to it and whatnot.
//Only fucntions have proptotypes. Only functions. Not objects or arrays anything else
//We can think of it as empty space provided to use by javascript to play around.

// const about = function ()
// {
//     console.log("Hi")
// }
// console.log(about.prototype)
//Output
//{constructor: ƒ}
//As we can see that prototype is just an object that has constructor initially
// // We can add to it e.g
// about.prototype.description = "dummy description"
// console.log(about.prototype)
//Output
// {description: 'dummy description', constructor: ƒ}

// Now back to our problem
// //Our createFunction also has prototype property
// const userMethods= {
//     about: function(){
//         return `first name is ${this.firstname} and age is ${this.age}`
//     },
//     is18: function(){
//         return this.age>18
//     },
//     showEmail: function(){
//         return this.email;
//     }  
// }
function createFunction (firstname, lastname, address, age, email){
   // const user = Object.create(userMethods);
   // Now we will use this function Prototype to create the object.
   const user = Object.create(createFunction.prototype);
    user.firstname = firstname;
    user.lastname = lastname;
    user.address = address;
    user.age = age;
    return user;  
}
    createFunction.prototype.about= function(){
            return `first name is ${this.firstname} and age is ${this.age}`
        }

        createFunction.prototype.is18= function(){
            return this.age>18
        },
        createFunction.prototype.showEmail= function(){
            return this.email;
        }
//So, now what we can do is instead of making userMethods, i can use prototype
// to add functions to createFunction as follows

console.log(createFunction.prototype)
//Output
//{about: ƒ, is18: ƒ, showEmail: ƒ, constructor: ƒ}

const user1 = createFunction("ali" , "imran" , '114' , 18 ,'a@b.com')
console.log(user1.about())


