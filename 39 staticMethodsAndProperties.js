class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
    static numberOfLegs = 6;
    static getName()
    {
        return "Dummy name";
    }
	eat() {
		console.log(`${this.name} eats`);
	}
	isCute() {
		return true;
	}
}
// this can be access using Class name
console.log(Animal.numberOfLegs);
console.log(Animal.getName());
