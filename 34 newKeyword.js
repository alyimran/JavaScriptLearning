// new keyword
function createUser(firstName, age){
    this.firstName = firstName,
    this.age= age;
}

const user1 = new createUser("ali" , 18)
console.log(user1)

//this keyword is doing the following
//1:It creates an empty this object just as we created in our exapmles to create object
// e.g this = {} then we add values to it e.g this.firstName = firstname
//2:returns this
//3:If now I add functions or properties to the prototype
// of createUser function, new keyword will automatically 
// set it to the __proto__ of createuser. So, what we were doing manually previously 
// the new keyword does that for automatically.
//look in the following
createUser.prototype.about = function (){
    return `name is ${this.firstName} and age is ${this.age}`
}


// I only added the function to about and it automatically got added to __proto__ object

console.log(user1)
console.log(user1.about());