//filter method or array
const numbers = [1,2,3,4,5,6]

const isEven = function (num){
    if (num%2==0) return true;
    return false
}


//filer method filters the array based on conditions passed in the callback function
//and returnd a new filtered array.
const evenNumbersArray =numbers.filter(isEven)
console.log(evenNumbersArray)
// output 
//[2, 4, 6]

//find returns the first member of the array that satisfies the condition.
const firstEvenNumber =numbers.find(isEven)
console.log(firstEvenNumber)
// output
//2




