// Some mehtod of array
// Opposite of every.
// Whether even on of the item of array
// satisfies the conidiont or predicate passed to it?

const numbers = [1,3,4,5,6,45]

const isEveryItemEven = numbers.some((number)=>{
    return number%2===0;
})

console.log(isEveryItemEven)