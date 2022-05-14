//Create a function to create objects.
// function createFunction (firstname, lastname, address, age, email){
//     const user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.address = address;
//     user.age = age;
//     user.email = email;
//     user.about= function(){
//         return `first name is ${this.firstName} and age is ${this.age}`
//     },
//     user.is18= function(){
//         return this.age>18
//     }  
//     return user;  
// }

// const user1 = createFunction('ali' , 'imran', "115" , 19, 'a@b.com')
// console.log(user1)

// We can create multiple object this way
//But there is a problem with this.
//If i create 100 objects, all the object will have 
// their own copy of about and is18 functions.
//We do not want them.
//So, solution? look below

// const userMethods= {
//     about: function(){
//         return `first name is ${this.firstName} and age is ${this.age}`
//     },
//     is18: function(){
//         return this.age>18
//     }  
// }
// function createFunction (firstname, lastname, address, age, email){
//     const user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.address = address;
//     user.age = age;
//     user.email = email;
//     user.about=userMethods.about;
//     user.is18=userMethods.is18;
//     return user;  
// }

// const user1 = createFunction('ali' , 'imran', "115" , 19, 'a@b.com')
// console.log(user1)

// We can extract the functions from createFunction and 
// add them in a separate object. Then add the reference
// to those functions in our createFunction function. 
// This will work.
//BUT
//This also have some problems.
//what if i wanted to add 100 more methods to the object?
// I will have to add them in separte object and then add 
// references to them in our create function

//So , to solve that, look below

// const obj1 = {
//     key1:'value 1',
//     key2:'value 2'
// }

// const obj2 = {
//     key3:'value 1',
//     key4:'value 2'
// }

//What will happen if i try to access key1 from obj2?
//console.log(obj2.key1)
//It will create an error obviously.
// But i want to be able to access that from obj2. but how?
// That's how

// const obj1 = {
//     key1:'value 1',
//     key2:'value 2'
// }

// console.log(obj1)

// const obj2 = Object.create(obj1)
// console.log(obj2);
// // when we print obj2,it will be an empty object
// // but following works e.g obj2 can access key1 of obj1.
// console.log(obj2.key1)

// But HOW? how indeed,
// What happens is that, when we use Object.create(obj1) to create an empty object,
// it creates an empty object obj2 and makes obj1 it's __prototype__ or [ProtoType]
// Every object has a __proto__.
// If we create a simple object then, its [ProtoType] will be
// window object

// Whenever we try to access a key in a object, javascript
//first looks for that key in the current object, if it's not found
// it looks for it in its __proto__

// Note: ProtoType is completely different thing

// So , back to our problem, now i can create the empty object with object.creat(userMethods)
// Now we can add as much methods in the object as we want by adding methods in UserMethods
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
// function createFunction (firstname, lastname, address, age, email){
//     const user = Object.create(userMethods);
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.address = address;
//     user.age = age;
//     user.email = email;
//     user.about=userMethods.about;
//     user.is18=userMethods.is18;
//     return user;  
// }

// const user1 = createFunction('ali' , 'imran', "115" , 19, 'a@b.com')
// console.log(user1)
// console.log(user1.showEmail())

