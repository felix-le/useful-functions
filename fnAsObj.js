const sayHello = () => console.log('Hello');

// console.log(sayHello.name);
// Hello

const add = (x, y, z) => x + y + z;
const args = [1, 2, 3]

// console.log(add.length);
// // 3

// console.log(add.toString());
// // > (x, y, z) => x + y + z

// console.log(add.call(null, 1,2,3));
// // > 6

// console.log(add(1, 2, 3));
// // > 6

// console.log(add.apply(null, args));
// // > 6

// console.log(add(...args));
// // > 6

const add1 = add.bind(null, 1);
console.log(add1(2,3));