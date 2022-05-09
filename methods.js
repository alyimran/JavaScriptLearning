// Methods
// functions inside an object

// const person = {
//     fisrtName:'ali',
//     age:8,
//     about:function(){
//         console.log(`first name is ${this.firstName} 
//         and age is ${this.age}`)
//     }
// }

// person.about();

//This keyworkd
// this is some object that is calling fucntion e.g about function in above example
// when this keyword is used inside a method, it will refer to that object which will call it.
// For example, in above example, person object is calling the method about() in line
//13. so, this keyword used in the about() method will become person object at run time.

const personInfo = function(){
    console.log(`first name is ${this.firstName} 
    and age is ${this.age}`)
}

const person1 = {
    firstName:'ali',
    age:8,
    about:personInfo
}

const person2 = {
    firstName:'Imran',
    age:18,
    about:personInfo
}

const person3 = {
    firstName:'Bangash',
    age:28,
    about:personInfo
}

person1.about();
person2.about();
person3.about();
// The data of that object is being shown with whom we are calling the object.
// Hence the above point. This becomes that object which calls the method

//Now here this fucntion is being called by global object e.g window object, so this is window object.
personInfo();
