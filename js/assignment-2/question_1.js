// Write a function that takes an array of numbers and returns the first and last elements of the array.


function arrayFun(arr){
    return `First number: ${arr[0]} and Last number : ${arr[arr.length-1]}`
}

console.log(arrayFun([1,2,3,4]))

function arrayFun2(arr){
    return [arr[0], arr[arr.length-1]]
}

console.log(arrayFun2([10,20,30,40]))

