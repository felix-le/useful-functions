// test 1
import words from 'an-array-of-english-words';

const countOccurrences = arr => arr.reduce((acc,str ) => ({
  ...acc,
  [str]: acc[str] + 1 || 1
}),{});

const hasSameLetterCount = (word1, word2) =>{
  const word1Count = countOccurrences(word1.split(''));
  const word2Count = countOccurrences(word2.split(''));

  return Object.keys(word1Count).length === Object.keys(word2Count).length && Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter])
}

const findAnagrams = (word, allWords) => {
  return allWords.filter(entry => hasSameLetterCount(word, entry)).filter(anagram => anagram !== word)
}

console.log(findAnagrams('cinema', words));

// test 2
function anagrams(stringA, stringB){
  return clearString(stringA) === clearString(stringB);
 }
 
 function clearString(str){
   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
 }
 