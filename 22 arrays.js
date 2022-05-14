//Intro to arrays
//Reference types
//Orderened collection


// How to create
// let fruits = ['ali' , "Imran" , "bangash"]
// let numbers = [1, 2, 4, 5]
// let mixed = ["ali" , 1, null, undefined]

// let dummyObject = {}


// Array type is object
//console.log(typeof fruits) // will print Object

// then how do i check if fruits is array or not?
// I can use the following
//console.log(Array.isArray(fruits)) // true
//console.log(Array.isArray(dummyObject)) // false



//Important array operations

//Array push
// fruits.push("Ali bhai");// Adds the item at the end of the array
// console.log(fruits)
//Out put ['ali', 'Imran', 'bangash', 'Ali bhai']

//Array pop
// fruits.pop(); // Removes the item from the end of the array
// console.log(fruits);
//Output  ['ali', 'Imran', 'bangash'] 

//Array shift
// fruits.shift("ali"); // removes the item from the start of the array
// console.log(fruits);
//output  ['Imran', 'bangash']

// Array Unshift
// fruits.unshift("ali"); // adds the item at the start of the array
// console.log(fruits);
// Output  ['ali', 'Imran', 'bangash']



//Pop/push are fast while shift unshift are slow



// How to clone Array
//let array1 = [1, 2 ,3]
// Method 1
// let array2 = array1.slice(0).concat(4);
//Method 2
//let array2 = [].concat(array1 , 4)
// Method 3: Spread operator (Most elegant)
//  let array2 = [...array1]
//  let array2 = [...array1 , 4, 5]
//  console.log(array2)



//For loop in array

//Use const for creating arrays