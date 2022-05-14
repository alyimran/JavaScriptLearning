//Has own property
function CreateFunction(firstname, lastname, address, age, email) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.address = address;
	this.age = age;
}
CreateFunction.prototype.about = function () {
	return `first name is ${this.firstname} and age is ${this.age}`;
};

(CreateFunction.prototype.is18 = function () {
	return this.age > 18;
}),
	(CreateFunction.prototype.showEmail = function () {
		return this.email;
	});

const user1 = new CreateFunction("ali", "imran", "114", 18, "a@b.com");

//  for (let key in user1)
//  console.log(key)

//Output
//  firstname
//   lastname
//   address
//   age
//   about
//   is18
//   showEmail
// As we can see that for in loop is showing all of the
//keys even from prototype of the funciton
//But what if we want to show only those properties which belong to current object?
for (let key in user1) {
	if (user1.hasOwnProperty(key)) console.log(key);
}

//output
//  firstname
//   lastname
//   address
//   age

//A bit more about arrays
// we studied earlier that array has a lot of functions like find, map, fill etc
let array = [1, 2, 3];
console.log(array);
//output
//0: 1
//1: 2
//2: 3
//length: 3
//[[Prototype]]: Array(0)

// As we can see that array does not have none of those fucntions
// Plus , we said earlier that only a function has [[prototype]]
//but we can see above that the output of array also has prototypes
// What happens is that javascript in the background creates array as following
let array1 = new Array(1, 2, 3);
// and we know what this new keyword does.
// thats how this array has access to all these functions.
console.log(Array.prototype);
const dummy = {};
console.log(dummy);
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// Please notice that the prototype is an array in case of array(Maker of
//javascript thought that it would be great to make it array)
// But it will be an object in case of functions
