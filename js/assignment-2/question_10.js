// Write a function that concatenates two arrays without using the concat method

const arr1=[10,20,30]
const arr2=[40,50,60]

const result=[...arr1,...arr2]
console.log("method 1")
console.log(result)

const result2=[]
const concatenatesTwoArr=(arr1,arr2)=>{
    for(let i=0;i<arr1.length;i++){
        result2.push(arr1[i]);
    }
    for(let j=0;j<arr2.length;j++){
        result2.push(arr2[j]);
    }
    return result2
}
console.log("method 2")
console.log(concatenatesTwoArr(arr1,arr2))
