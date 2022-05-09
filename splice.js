//Splice method of array
// start , delete , insert
// Used to delete or insert in an array
//Mutates the original array

const myArray = ['item 1' , 'item 2' , 'item 3']
//delete 
const deleteItem = myArray.splice(1,1, "inserted item");
console.log('my array' , myArray)
console.log('deleted item' , deleteItem)
