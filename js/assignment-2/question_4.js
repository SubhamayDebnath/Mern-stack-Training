// 4. Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.

let arr1=[2,3,4,5];
let arr2=[6,7,8,9,10];
let mergedArr=[1,...arr1, ...arr2];
console.log(mergedArr);

