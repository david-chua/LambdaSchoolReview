// Create a function that takes a string and returns a new string with duplicates

// const str = 'This is is a test test string';

// removeDuplicates(str); // 'This is a test string';

const removeDuplicates = function(str){
  let strArray = str.split(' ');
  let seenObj = {};
  let resultArray = [];
  for (let i =0; i < strArray.length; i++){
    let currentWord = strArray[i];
    if (seenObj[currentWord] === undefined){
      seenObj[currentWord] = true
      resultArray.push(currentWord)
    }
  }
  return resultArray.join(' ');
}

const str = 'This is is a test test string';


console.log(removeDuplicates(str));



const removeDuplicatesWithSet = function(str){
  let arr = str.split(' ');
  let newSet = new Set(arr);
  let newString = [...newSet].join(' ');
  return newString;
}


const str2 = 'This is is a test test string';

console.log('using Set: ', removeDuplicatesWithSet(str2));
