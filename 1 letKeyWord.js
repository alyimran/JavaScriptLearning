// Following can be done with var
var name = "Ali Imran"
var name = "Bangash"
console.log(name)

//But not with let, following throws an error Uncaught SyntaxError: Identifier 'myName' has already been declared
// let myName = "Ali"
// let myName = 'bangash';
// console.log(myName)


//varriable defined with let can be changed. 
let myName = "Ali"
myName = 'bangash';
console.log(myName)


/* Declarining constants e.g const keyword.
 The following code will throw an error as follows
 Uncaught TypeError: Assignment to constant variable.
 
 
 const constName = "Imran"
 constName = 'bangash';
 console.log(constName) 
 
 */

 const constName = "Imran"
 console.log(constName) 