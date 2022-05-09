//block scope vs function scope
//Let and const are block scope

{
    let lastname = "Ali"
    const firstName = "Imran"
}
// console.log(lastname)
// console.log(firstName)
// this line will create error because let is block scope.
//Same is true for const


// var is function scope

{
    var phone = "0321"
}
//This line will not create any error cos var is function scoped
console.log(phone)


const myFunc = () => {
    var myName = "ali"
}
//now varriable myName will not be accessible here because var is funciton scope and we are 
// trying to access this varriable outside of the funciton inw which 
console.log(myName);