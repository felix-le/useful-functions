// #
// ##
// ###
// ####
// #####
// ######
// #######

const triangle = (n) =>{
  let char = '#';

  if(n < 0) return;

  while(char.length <= n){
    console.log(char)
    char = char + '#'
  }

  return char;
}
triangle(7);

