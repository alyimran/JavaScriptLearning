const promiseFunction = function (){
    const bucket = []
    return new Promise((resolve, reject)=>{
        if (bucket.includes("salt")){
            resolve("Fried rice prepared");
        }
        else{
            reject("fried rice not prepared");
        }
    });
}


promiseFunction().then((value)=>{
    console.log(value)
})
.catch((value)=>{
    console.log(value)
});