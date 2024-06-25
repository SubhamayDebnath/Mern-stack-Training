// Given an array of objects representing users with name and age properties, write a function that returns an array of names of users who are over18.
// const users = [
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 15 }
// ];

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 15 },
];

const filteredUser=users
                        .filter(elem=>elem.age > 18)
                        .map(elem=>elem.name)
console.log(filteredUser)