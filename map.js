//map method
const numbers = [1,2,3,4]
//this function returns the square of every number
const square = function (num , index){
    return num*num;
}

//Map function always returns an array
const squareArray = numbers.map(square)

console.log(squareArray)

//output

// [1, 4, 9, 16]


const logfunc = function (num , index){
    console.log(num*num);
}

const simpleLogfuncArray = numbers.map(logfunc)

console.log(simpleLogfuncArray)

//output 
//[undefined, undefined, undefined, undefined]

console.log(numbers);
//output of original array
//[1, 2, 3, 4]

//Map  function always returns an array. If the callback we provided to map function does not 
//return anything than it returns an array of undefined.

//So map function is used to duplicate and manipulate that duplicated array in some way e.g. sqaure it or something


// A bit realistic example
const users = [
    {firstName:'Ali' , age:18},
    {firstName:'Imran' , age:19},
    {firstName:'Bangash' , age:20},
    {firstName:'Khan' , age:21},
]

const firstNameList = users.map((user, index)=>{
    return user.firstName
})

console.log(firstNameList)
