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
}

const tommy = new Dog("Tommy", 12, 100);
tommy.eat();
tommy.run()
console.log(tommy);
console.log(Object.getPrototypeOf(tommy));
