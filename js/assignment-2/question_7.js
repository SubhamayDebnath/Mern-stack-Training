// Write a function that returns the array sorted by the length of each string, in ascending order.

const sortedArray=(arr)=>{
    return arr.sort((a,b)=>a.length-b.length);
}
const arr=['css','javascript','html','python','c++']
console.log(sortedArray(arr));