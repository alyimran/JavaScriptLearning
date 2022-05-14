//Lexical scope chaingin
var myVar = "dummy"
const App = () => {
    

    const func1 = () =>{
        console.log("inisde func1" , myVar)
    }

    console.log(myVar);
    func1();
}

App()


// so, when a funciton tries to use myVar , it looks for it in its own scope,
// if it finds it, it uses it, if it does not find it, looks for it in upper scope, and that process continues
//until that varriable is found. 
// This is knows as lexical scope chainig