//Callback hell or nested callbacks
// settimeout(()=>{
//     console.log('first timeout done')

//     settimeout(()=>{
//         console.log("second timeout done")
//         setTimeout(()=>{
//             console.log("third")
//             settimeout(()=>{
//                 console.log("fourth");
//                 settimeout(()=>{
//                     console.log("fifth");
                    
//                 });
//             },1000)
//         },1000)
//     } , 1000);
// } , 1000);


// As we can see that the above code gets messy really soon, this is known as callback hell.
//Which means that the code is not readable anymore.

// Another example
// I want to change the text for many headings
// function changeText(text , heading , onSuccess, onFailure){
//     if (color)
//     {
//         console.log(`color of heading ${heading} is ${color}`)
//         onSuccess();
//     }
//     else{
//         console.log("color is undefined");
//         onFailure();
//     }
// }

// I will call this function as follows
// changeText("text1" , "heading1" , ()=>{
//   console.log("Success");
//   changeText("text2" , "heading2" , ()=>{
//     console.log("Success");
//     changeText("text3" , "heading3" , ()=>{
//         console.log("Success");
//         changeText("text4" , "heading4" , ()=>{
//             console.log("Success");
//             changeText("text5" , "heading5" , ()=>{
//                 console.log("Success");
//                 changeText("text6" , "heading6" , ()=>{
//                     console.log("Success");
//                     changeText("text7" , "heading7" , ()=>{
//                         console.log("Success");
//                         changeText("text8" , "heading8" , ()=>{
//                             console.log("Success");
//                             changeText("text9" , "heading9" , ()=>{
//                                 console.log("Success");
                                  
//                               } , ()=>{
//                                   console.log("failure");
//                               });
//                           } , ()=>{
//                               console.log("failure");
//                           });
//                       } , ()=>{
//                           console.log("failure");
//                       });
//                   } , ()=>{
//                       console.log("failure");
//                   });
//               } , ()=>{
//                   console.log("failure");
//               });
//           } , ()=>{
//               console.log("failure");
//           });
//       } , ()=>{
//           console.log("failure");
//       })
//   } , ()=>{
//       console.log("failure");
//   })
// } , ()=>{
//     console.log("failure");
// })

// As we can see, it has begin to look like hell already , and if we look at it, it has begin to look like a pyramid.


// So, what's the solution?
//PROMISES
//Promise is a future value that we do not know right now but we will know it later.

const bucket = ["coffee" , 'chips' , 'saldt' , 'rice' , 'vegies']
// This is know as promise production or creation
const myPromise = new Promise((resolve , reject)=>{
    if (bucket.includes("salt") && bucket.includes("rice") && bucket.includes("vegies")){
        resolve("Fried rice prepared");
    }
    else{
        reject("Fried rice can not be prepared");
    }
});


//  How to consume a promise
myPromise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

setTimeout(() => {
    console.log("hello form inside timeout")
}, 100);

for(let i = 0; i<100;i++)
console.log("test value")

// Promise is a feature of browser not js because it is asynchronous
// in nature , when we consume a promise, it is delegated to browser, 
// the browser takes the callback function, adds it in microtask queue.
// The event loop waits for the execution task stack to be freed. once that happens
// The call back function is returned to js and is executed.


//In case, where there is Promise and Settimeout or other similar funcitons are both
// present in code, or in Callback queue and Microtask queue, then the tasks
// in microtask queue will execute first.

