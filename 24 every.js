const numbers = [1,3,4,5,6,45]

const isEveryItemEven = numbers.every((number)=>{
    return number%2===0;
})

console.log(isEveryItemEven)
//output
//false

// every method determines whether every item of array
// satisfies a predeicate passed to it
// It returns true or false