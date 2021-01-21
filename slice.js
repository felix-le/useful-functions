// it creates new array and no change the original array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.slice(3,8);
console.log("🚀 ~ file: slice.js ~ line 5 ~ newArray", newArray); // create new array
console.log("🚀 ~ file: slice.js ~ line 3 ~ numbers", numbers) // no change the original array
