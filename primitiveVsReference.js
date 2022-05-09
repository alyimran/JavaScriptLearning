// Primitive
// let num1 = 5;
// let num2 = num1;
// console.log("Num1 is " + num1)
// console.log("Num12 is " + num2)

// num1 = 6;

// console.log("Num1 is " + num1)
// console.log("Num12 is " + num2)

//output
// Num1 is 5
// Num12 is 5
// Num1 is 6
// Num12 is 5

// so primitive types assign values to eachother not references.
//Primitive types are stored on stack because they do not take much space in memory.

let array1 = ['mango'];
let array2 = array1;
console.log("array1 is " + array1)
console.log("array2 is " + array2)

array1.push("apple")

console.log("array1 is " + array1)
console.log("array2 is " + array2)


//output
// array1 is mango
// array2 is mango
// array1 is mango,apple
// array2 is mango,apple

//Reference types are stored in heap. but their pointer are stored in stack
//e.g an array is actually stored in heap but the pointer to it e.g array1 in our example 
//will be stored in stack . Now when i assign array1 to array2. That array2 is also stored in 
// stack with memory address of the original array to which array1 is pointing.  