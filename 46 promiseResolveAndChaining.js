//Promise.resolve
const myPromise = Promise.resolve(5);
myPromise.then((value)=>console.log(value))
//Promise.resolve always returns a promise with the value passed to it


//then method always returns a promise.

function tempPromise (){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    });
}

tempPromise()
        .then((value)=>{
            console.log(value);
            return value + "bar";
        })
        .then((value1)=>{
            console.log(value1);
        });

// So, line number 18 actually returns a promise like below
// Promise.resolve(value + "bar")
// In case we do not return anything, then undefined is returned
// Promise.resolve(undefined)