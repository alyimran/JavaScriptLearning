class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		console.log(`${this.name} eats`);
	}
	isCute() {
		return true;
	}
}

const animal = new Animal("Animal", 18);
animal.eat();

// It will inherit all the properties and functions of Animal
class Dog extends Animal {
	// what if i want to add some properties to dog class as well? i can
	// proceed like below
	constructor(name, age, speed) {
		super(name, age);
		this.speed = speed;
	}
	run (){
        console.log(`this dog runs at speed of ${this.speed}`);
    }

    eat() {
		console.log(`Modified version : ${this.name} eats`);
	}
}
// when we define same function in the derived class
// the function in the derived class overides the parent function

const tommy = new Dog("Tommy", 12, 100);
tommy.eat();
// now the eat() function in child class will get called

// What javascript does is that, when ever we call a function
// from a class, javascript first looks for it in that class, 
// if it does not find it in the same class, then and only then 
// it looks for it in the parent class or in prototype