//Object 
//Arrays are good but not suffient for real life data
// We need objects for that
//Objects store key valuse pairs.
//Objects dont have index

// How to create objects
const person = {
    name:"ali",
    address:'khanewal'
}
// // this is also correct
// const person = {
//     "name":"ali",
//     "address":'khanewal'
// }

// how to access
// var name = person.name;
// var name = person['name']

//how to add key values pairs to objects
person.phone = '0321255'
console.log(person)

// how to loop through an array
//Method 1: For in loop

for (let key in person)
console.log(person[key])

// Method 2:Object.Keys using for-of loop
for (let key of Object.keys(person))
console.log(person[key])



//Computed Properties
const key1 = 'objkey1';
const key2 = 'objkey2';
const value1= 'objvalue1';
const value2 = 'objvalue2';

// try to make an object consisting of obove key/values
const obj = {
    [key1]:value1,
    [key2]:value2,
}

console.log(obj)