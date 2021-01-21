// const map = (arr, fn) =>
//   arr.reduce((acc, x) =>[
//     ...acc,
//     fn(x)
//   ],[]);

const map = (arr, fn) =>{
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    newArray.push(fn(arr[i]));
  }
  return newArray;
}








// should be [2, 4, 6];
console.log(map([1, 2, 3], x => x *2));

// should be [ -5, -6, -7, -8, -9, -10, -11];
console.log(map([5, 6, 7, 8, 9, 10, 11], x => -x));

// should be ['A', 'B', 'C', 'D'];
console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));