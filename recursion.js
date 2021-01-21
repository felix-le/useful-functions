const countDown = x =>{
  if(x < 0) return;
  console.log(x);
  countDown(x-1);
}

const countUp = (x, max) =>{
  if( x > max ) return;
  console.log(x);

  countUp(x + 1, max);
}
countUp(0, 10);

function isEvent(n){
  if(n<0) return;
  return n % 2 === 0;
}


console.log("🚀 ~ file: recursionBook.js ~ line 6 ~ isEvent(4)", isEvent(0))