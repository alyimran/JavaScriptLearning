// call, apply , bind functions on objects

//CALL FUCNTION
// const person1 = {
//     firstName:'ali',
//     age:18,
//     about:function(){
//         console.log(`name is ${this.firstName} and age  is ${this.age}`)
//     }
// }

// I can call the above about fucntion from above as follows
//person1.about();
//output
// name is ali and age  is 18

//Or
//person1.about.call();
// name is undefined and age  is undefined
//both of the above methods are valid in javascript but when we use call() function, 
// we have to provide an value of this as argument else 'this' will be undefined in the about function

//We can use call() function to be able to borrow about function
// from person1 and  use that  same from antoher object  that does not have that function.
// As can be seen in the following
// const person2={
//     firstName:'Akram',
//     age:19
// }
// person1.about.call(person2)

// now 'this' in the about method becomes person2 even though it is being called by person 1

//We can just extract the about function form person 1 and use that funciton with any object using call() funciotn and passing that object
//as argument to call(). it will consider it as this
//e.g
// function about(hobby, passion){
//     console.log(`name is ${this.firstName} and age  is ${this.age}`)
//     console.log(`hobby is ${hobby} and passion  is ${passion}`)
// }
// const person1 = {
//     firstName:'ali',
//     age:18,
    
// }

// const person2={
//     firstName:'Akram',
//     age:19
// }
// about.call(person1 , 'cricket' , 'cricket');
// about.call(person2 , 'football' , 'football');
// we can pass extra arguments to call as well as shown above

//APPLY FUNCTION
//apply is same as call() function but it allows us to pass extra arguments 
// as array
//e.g
//about.apply(person1 , ['test' , 'test2'])

//BIND FUNCTION
// const aboutfunc =about.bind(person2, "testing , testing 2")
// aboutfunc()

//bind function does not call the function directly like in case of
// call() or apply
// It returns a function that can later be called as shown above

//DONT MAKE THIS MISKTAKE

// const person1 = {
//     firstName:'ali',
//     age:18,
//     about:function(){
//         console.log(`name is ${this.firstName} and age  is ${this.age}`)
//     }
// }

// const myfunct1 = person1.about;
// myfunct1();

// you might think that above code will work but it will not
// as it will return undefined for both firstName and age
// To make it work, we need to bind it properly like below

// const myfunct = person1.about.bind(person1);
// myfunct();


// This in ARROW FUNCTIONS
// arrow functions do not have its own 'this'
//Arrow functions always gets the this from one level up

// const person1 = {
//         firstName:'ali',
//         age:18,
//         about:()=>{
//             console.log(`name is ${this.firstName} and age  is ${this.age}`)
//         }
//     }
//     // this function will return undefined for age and name
//     //Because arrow function takes this from one level up
//     // Which is window object in this case
//     person1.about();

//     //following does not work either in case of arrow function
//     person1.about.call(person1)
//     const temfunc =person1.about.bind(person1)
//     temfunc()



    //SHORT FORM OF METHOD IN OBJECT
    // following way of defining funciton in object is valid
const person1 = {
        firstName:'ali',
        age:18,
        about(){
            console.log(`name is ${this.firstName} and age  is ${this.age}`)
        }
    }
    person1.about()