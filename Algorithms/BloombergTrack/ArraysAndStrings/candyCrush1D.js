

const candyCrush = function(input){
  let count = 0;
  let lastChar = input[0]
  let retry = true;
  let chars = input.split('');

  while(retry){
    const list = [];
    retry = false;
    chars.forEach(char => {
      if (lastChar !== char){
        // we have arrived at a different character
        if (count >= 3){
          // Match, so removed this character.
          retry = true;
        } else {
          // no match, so keep it and push it back on to the list
          for (let i =0; i < count; i++){
            list.push(lastChar);
          }
        }

        // reset counter
        count = 0;
        lastChar = char;
      }

      count++;
    });

    if (count < 3){
      list.push(lastChar)
    }

    chars = list;
    count = 0;
    lastChar = chars[0];

  }

  return chars;
}


// console.log(candyCrush('aaabbbc')); // c
// console.log(candyCrush('aabbbacd')); // cd
// console.log(candyCrush('aabbccddeeedcba')); // []
// console.log(candyCrush('aabbbacdbbbc')); // acd
// console.log(candyCrush('dddabbbbaccccaax')); // x



const candyCrushShortest = str => {
  const findSolutions = str => {
    if (str === "" || str.length === 1) {
      return [str];
    }

    let groups = [];
    let start = 0;
    let count = 0;
    let char = "";

    for (let i = 0; i < str.length; ++i) {
      console.log(str[i])
      if (str[i] != char) {
        if (count >= 3) {
          groups.push(str.slice(0, start) + str.slice(start + count));
        }

        char = str[i];
        start = i;
        count = 1;
      } else {
        ++count;
      }
    }

    for (let i = 0; i < groups.length; ++i) {
      if (groups[i].length > 1) {
        groups = groups.concat(findSolutions(groups[i]));
      }
    }
    return groups;
  };

  return findSolutions(str).sort((a, b) => a.length - b.length)[0];
};


// console.log(candyCrushShortest("baaabbbabbccccd"));
console.log(candyCrushShortest("aaabbbacd"));
