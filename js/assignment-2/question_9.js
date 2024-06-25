// Write a function that removes the third element from an array and returns a new array with the removed element. Do not modify the original array

const arr=[10,20,30,40,50,60,70]

const newArr=[];

const removedArr=(arr)=>{
    arr.forEach((element,index) => {
        if (index != 2){
            newArr.push(element)
        }
    });
    return newArr
}
console.log("New Array after remove the third element");
console.log(removedArr(arr))
console.log("\nOriginal array");
console.log(arr)