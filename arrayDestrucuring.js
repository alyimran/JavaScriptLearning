// Array destructuring
// Came in ES6 . Is used a lot

const array = [1,2,3,4]
// How to get first two items of array in varriables?
// Old method
// let a = array[0];
// let b = array[1];

// New way
// let [a, b] = array;
// // Now a and b can be used as normal varriables
// console.log(a);
// console.log(b);

// how to skip items e.g if i want ot store third index item in b?
 //let [a,,b] = array
 //Then we will skip that item place by adding a comma. 

//  console.log(a);
// console.log(b);


//How to get first two items of array in varriables and get the rest of them 
// in new array?
//Simple
let [a, b, ...newArray] = array
 console.log(a);
console.log(b);
console.log(newArray);

