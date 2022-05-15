// Some mehtod of array
// Opposite of every.
// Whether even on of the item of array
// satisfies the conidiont or predicate passed to it?
// It returns true or false

const numbers = [1,3,4,5,45]

const isSomeItemEven = numbers.some((number)=>{
    return number%2===0;
})

console.log(isSomeItemEven)
//output 
//true