// Write a function that concatenates two arrays without using the concat method

const arr1=[10,20,30]
const arr2=[40,50,60]
const result=[]
const concatenatesTwoArr=(arr1,arr2)=>{
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]);
    }
    for(let j=0;j<arr2.length;j++){
        result.push(arr2[j]);
    }
    return result
}
console.log(concatenatesTwoArr(arr1,arr2))
