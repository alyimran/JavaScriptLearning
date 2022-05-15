/*
Javascript is executed in two phases
1:Compilation
2:Execution
*/

/*
COMPILATION PHASE
It has three parts
1:Tokenization (code is devided into very small chunks called tokens)
2:Parsing of the code
3:Code generation
*/


/*
Java script code is first compiled into executable code so that two purposes 
can be acheived
A:Early error checking in the code
B:D.A.S.Y (Determining appropriate scope for varriables)
It means kay konsa varrialbe kaha belong karta hai, kis scope main belong karta hai,
kahan ham usay access kar sakte hain

For example if we create a varriable named first name inside a function, js will know that 
that its scope is in that function in advance before even executing the code.
Same goes for the case when firstName is defined outside of a function, js knows that it is 
scoped globally means it can be accessed globally
*/

/*
EXECUTION PHASE
JS code exceutes inside of an Execution Context
Initially Global execttion context is created.
*/

/*
GLOBAL EXECUTION CONTEXT
It has two parts
1:Creation phase
2:Execution phase
*/

// Creation Phase
//In creation phase, all the varriables and function definations are stored in the memory
//consider the following code
console.log(this)
console.log(window)
console.log(fullName)
console.log(myFunction)

function myFunction (){
    console.log("This is my function")
}
var firstName = "ali";
var secondName = "Imran"
var fullName = firstName + " " + secondName
console.log(fullName)

/*
In creation phase, firstName, secondName , fullName and myFunction defication get stored on 
the memory in Global Execution Context (GEC)
Variables are stored with initial  value of undefined

All the execution contexts are saved in Stack in memory
Consider the following stack of EC(Execution Contexts)
When the execution phase starts after compilation phase GEC is added in the stack
|                       |
|                       |    
|                       |
|        GEC               |

 */