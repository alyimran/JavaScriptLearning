// reduce function of array

// const numbers = [1,2,3,4,5,10]

// const sumOfArray = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// })


// console.log(sumOfArray)


// the flow of the function being called
// accumulator      current value       return value
// 1                2                   3
// 3                3                   6
// 6                4                   10
// 10               5                   10
// 15               10                  25

// Reduce function reduces the whole array to a number based on 
// some criteria passed in the function.


//We can also pass in initial value to reduced fucntion
//Then the inital value becomes the first value of accumulator

// const numbers = [1,2,3,4,5,10]
// const sumOfArray = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// } , 100)
// console.log(sumOfArray)

//output 125


//Another example
const users = [
    {procuctId :1,productName:"Phone" ,  price:1200},
    {procuctId :2,productName:"Iphone" ,  price:1300},
    {procuctId :3,productName:"Tv" ,  price:1400},
]

const totalPrice = users.reduce((accumulater , previousValue)=>{
    return accumulater + previousValue.price;
}, 0)

console.log(totalPrice)

// Accumulator  current value         return
// 0            1200                    1200
// 1200         1300                    2500
// 2500         1400                    3900