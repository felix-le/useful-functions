const arrToNestedObj = arr =>{
  return arr.reverse().reduce((rest, value)=>{
    return {
      value: value,
      rest: rest
    }

  },null);
}
console.log(arrToNestedObj([10, 20,30]));
// { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }