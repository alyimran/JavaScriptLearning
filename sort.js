// sort method of array

//It mutates the original array

const numbers = [1,4,100,5,23]
numbers.sort((a,b)=>a-b);
console.log(numbers)

numbers.sort((a,b)=>b-a)
console.log(numbers)