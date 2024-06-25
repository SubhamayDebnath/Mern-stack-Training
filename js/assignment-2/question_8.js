// Given an array of numbers, write a function that returns the index of the first number that is greater than 10. If no such number exists, return -1
const arr=[30,45,3,28,3,55,6,2];

const result=(arr)=>{
    for (let i =0 ; i < arr.length;i++){
        if (arr[i] > 10){
            return i
        }
    }
    result -1
}

console.log("method 1")
console.log(result(arr))


const item=(arr)=>{
    const indexOfItem=arr.findIndex(num=>num > 10)
    return indexOfItem === -1 ? -1 : indexOfItem
}

console.log("method 2");
console.log(item(arr));