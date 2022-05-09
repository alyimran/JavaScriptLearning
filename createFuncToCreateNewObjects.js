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

const userMethods= {
    about: function(){
        return `first name is ${this.firstName} and age is ${this.age}`
    },
    is18: function(){
        return this.age>18
    }  
}
function createFunction (firstname, lastname, address, age, email){
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.address = address;
    user.age = age;
    user.email = email;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;  
}

const user1 = createFunction('ali' , 'imran', "115" , 19, 'a@b.com')
console.log(user1)

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
//I will create an error obviously.
// But i want to be able to access that from obj2. but how?
// That's how

const obj1 = {
    key1:'value 1',
    key2:'value 2'
}

console.log(obj1)

const obj2 = Object.create(obj1)
console.log(obj2);
// when we print obj2,it will be an empty object
// but followin works e.g obj2 can access key1 of obj1.
console.log(obj2.key1)

// But HOW? how indeed,


