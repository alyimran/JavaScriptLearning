//Splice method of array
// start , delete , insert
// Used to delete or insert in an array
//Mutates the original array

const myArray = ['item 1' , 'item 2' , 'item 3']
//delete 
/**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
*/
//  splice(start: number, deleteCount: number, ...items: T[]): T[];
const deleteItem = myArray.splice(1,1, "inserted item");
console.log('my array' , myArray)
//Output
//['item 1', 'inserted item', 'item 3']
console.log('deleted item' , deleteItem)
//Output
//deleted item ['item 2']
