// function CreateFunction(firstname, lastname, address, age, email) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.address = address;
// 	this.age = age;
// }
// CreateFunction.prototype.about = function () {
// 	return `first name is ${this.firstname} and age is ${this.age}`;
// };

// CreateFunction.prototype.is18 = function () {
// 	return this.age > 18;
// };
// CreateFunction.prototype.showEmail = function () {
// 	return this.email;
// };

// const user1 = new CreateFunction("ali", "imran", "114", 18, "a@b.com");

// We can convert the above createFunction function to class
// In java script Classes are fake
// Because when we create an object using classes , under the hood,
//above method is used to create objects

class CreateUser {
	constructor(firstname, lastname, address, age, email) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.age = age;
	}

    about() {
        return `first name is ${this.firstname} and age is ${this.age}`;
    };
    
    is18() {
        return this.age > 18;
    };
    showEmail() {
        return this.email;
    };
}

const user1 = new CreateUser("ali", "imran", "114", 18, "a@b.com");
console.log(user1.about())

//Under the hood, the object from this class is being genreted in the same way
// it was being generated previously through CreateUser() function.
// It is just a synctatic sugar that has been added in ES6.
// the methods about(), is18() and showEmail() , under the hood
// they are added to the prototype of "this" object e.g.
console.log(Object.getPrototypeOf(user1))
//output
//{constructor: ƒ, about: ƒ, is18: ƒ, showEmail: ƒ}
console.log(user1)
// CreateUser {firstname: 'ali', lastname: 'imran', address: '114', age: 18}