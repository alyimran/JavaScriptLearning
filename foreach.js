// foreach

const numbers = [1,2,4,67]

// function func1 (num, index){
//     console.log(`number is ${num} and index is ${index}`)
// }

// we can call above function for all the items of numbers array
// for(let i =0; i<numbers.length;i++)
// {
//     func1(numbers[i] , i);
// }

//but there is an easier way
// foreach accepts a callback function and invokes that function for every item of the array

//numbers.forEach(func1);

// Above is only one way 
// we can do it as bellow as well  using anonymous funciton
// numbers.forEach(function(num, index){
//     console.log(`number is ${num} and index is ${index}`)
// })


// Or using arrow function
// numbers.forEach((num, index) =>console.log(`number is ${num} and index is ${index}`));


// Realistic example of foreach

const users = [
    {firstName:'Ali' , age:18},
    {firstName:'Imran' , age:19},
    {firstName:'Bangash' , age:20},
    {firstName:'Khan' , age:21},
]

users.forEach((user, index)=>{
    console.log(user.firstName)
})