function func1 (){
   return  function func2 ()
     {
         return "Hello world";
     }
     //return func2;
}

const fun = func1();
console.log(fun());


//Higer order function
// A function that receives a funtion as an argument or input
// Or returns a funtion. We call it a higher order function.