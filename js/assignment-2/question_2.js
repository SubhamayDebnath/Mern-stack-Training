// Write a function that returns a new array with each number squared using the map method.

const arr=[2,3,4,5,6]
const newArray= arr.map(elem=>{
    return elem*elem
});

console.log(newArray)