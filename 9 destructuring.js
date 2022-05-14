//Object destructuring
const person = {
    name:'ali',
    caste:'bangash',
    phone:'0321'
}

const {name:myName, caste:myCaste , ...restPros} = person;

console.log(myName , myCaste , restPros)


//Array destrucuring

const frutis = ['mango' , 'banana' , 'a' , 'b' , 1]

let [firstItem, secondItem , ...restof] = frutis;

console.log(firstItem);
console.log(firstItem, secondItem , restof);