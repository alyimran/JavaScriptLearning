//callback functions
function func1(callack){
   //console.log(a);
   //if (somecondition)
   callack();
}

function func2(){
    console.log("inside func2")
}

func1(func2);

// so , a callack function is a funciton that can be passed to another 
//another function so that it can be invoked later by that funtionc under some condition e.g when the data 
//from api comes back

//Any function that you took as input and called is a callback function.