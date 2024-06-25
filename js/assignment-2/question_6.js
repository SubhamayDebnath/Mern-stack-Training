// Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.

const objectOfSumAndProduct=(arr)=>{
    const sum= arr.reduce((acc,cur)=>acc+cur);
    const product= arr.reduce((acc,cur)=>acc*cur);
    return {sum:sum ,product:product}
}
console.log(objectOfSumAndProduct([2,3,4]))