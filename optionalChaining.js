// optional chaining
// We can use ? to check whether an object is null or undefined 
//before accessing its properties so that we do not get undefined error!
const user = {
    name:'Ali',
    // address:{
    //     Street:"115",
    //     phone:'134'
    // }
}

console.log(user?.address?.Street)