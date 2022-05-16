//I want to change the text for many headings
// function changeText(text , heading , onSuccess, onFailure){
//     if (text)
//     {
//         console.log(`color of heading ${heading} is ${text}`)
//         onSuccess();
//     }
//     else{
//         console.log("color is undefined");
//         onFailure();
//     }
// }

// //I will call this function as follows
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

// we will change this callback hell to flat code using promisses
// function changeText(text , heading , onSuccess, onFailure){
//     if (text)
//     {
//         console.log(`color of heading ${heading} is ${text}`)
//         onSuccess();
//     }
//     else{
//         console.log("color is undefined");
//         onFailure();
//     }
// }

function changeTextPromise(text, heading) {
	return new Promise((resolve, reject) => {
		if (text) {
			console.log("Heading changed for " + heading);
			resolve();
		} else {
			console.log("error while changing text for " + heading);
			reject();
		}
	});
}

// changeTextPromise("text1", "heading1")
// 	.then(() => {
// 		return changeTextPromise("text2", "heading2");
// 	})
// 	.then(() => {
// 		return changeTextPromise("text3", "heading3");
// 	})
// 	.then(() => {
// 		return changeTextPromise("text4", "heading4");
// 	})
// 	.then(() => {
// 		return changeTextPromise("text5", "heading5");
// 	})
// 	.then(() => {
// 		return changeTextPromise("text6", "heading6");
// 	});

    //the above code can also  be written as follows
changeTextPromise("text1" , "heading 1")
    .then(()=>changeTextPromise("text2" , "heading1"))
    .then(()=>changeTextPromise("text3" , 'heading3'))
    .then(()=>changeTextPromise("text4" , 'heading4'))
    .then(()=>changeTextPromise("text5" , 'heading5'))
    .then(()=>changeTextPromise("text6" , 'heading6'))
