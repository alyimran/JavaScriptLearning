//Spred operator

// const array1 =   [1,2,3];
// const array2 = [4,5,6];
// const newArray = [...array1 , ...array2]
// console.log(newArray)

// let randomString1 = "abcdef"
// const stringArray = [...randomString1]
// console.log(stringArray);

// let randomString2 = "12345678"
// const numberArray = [...randomString2]
// console.log(numberArray)


// Spread operator in objects
const obj1 = {
    key1:'value1',
    key2:'value2'
}

const obj2 = {
    key3:'value3',
    key4:'value4'
}

//this one puts the object in newObj as child
//const newObj ={obj1}
// console.log(newObj)

//This one clones the object
 //const newObj ={...obj1}
// console.log(newObj)

//  const newObj ={...obj1 , ...obj2}
// console.log(newObj)
// const newObj ={...obj1 , ...obj2 , key5:'value5'}
// console.log(newObj)

// we can also spread any iteratable inside an object e.g string
//const newObj = {..."abcdef"}
//console.log(newObj)
//output 
//{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f'}

const newObj = {...["item1" , 'item2']}
console.log(newObj)
//output 
//{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f'}



//Note:
//Objects can not have duplicate keys.
//If we put duplicate keys, then the last key overides all the previeous keys.

