const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

const sum = numbers.reduce((acc, x) =>{
  console.log(`acc is ${acc}`)
  console.log(`x is ${x}`);
  return acc + x ;
},0) //// second argument is starting value


/**
 * acc is 0
 * x is 5
 * acc is 5
 * x is 7
 * acc is 12
 * x is 2
 * acc is 14
 * x is 40
 */

console.log(sum);
// 114;

const product = numbers.reduce( (acc, x) =>{
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);

  return acc + x;
},0) 

/**
 * acc is 0
 * x is 5
 * acc is 0
 * x is 7
 * acc is 0
 * x is 2
 * acc is 0
 * x is 40
 */


console.log(product);
// 0;