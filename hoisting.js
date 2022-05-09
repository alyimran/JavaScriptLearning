// Hoisting
// Hello funciton will generate error if we try to invoke it before defining it while we have defined it as arrow funciton or function expression.
// But it will run okay if we define it as function declaration.

hello();
//const hello = () => console.log("hello world");
function hello()
{
    console.log("hello world") 
}

//hello()