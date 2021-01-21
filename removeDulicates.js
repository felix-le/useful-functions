const numbArr = [1, 2, 2, 3, 4, 4, 3, 2, 1, 5];

const removeDuplicates = (...args) =>{
  return [].concat(...args).filter((v, i, arr) => arr.indexOf(v)===i || console.log(v, i));
  

}
console.log(removeDuplicates(numbArr))