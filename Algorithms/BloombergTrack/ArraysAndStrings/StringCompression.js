var compress = function (chars) {
  let count = 1;
  let start = 0;

  for (let i = 1; i <= chars.length; i++) {
    const current = chars[i];
    const pre = chars[i - 1];

    if (current === pre) {
      count++;
    } else {
      if (count === 1) {
        start = i;
        continue;
      }
      const countStrs = count.toString().split('');
      chars.splice(start + 1, count-1, ...countStrs);

	  // reset i to index of "current" char after splice
      i = start + countStrs.length + 1;
      start = i;
      count = 1;
    }
  }
  return chars
};


let chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
let chars2 = ["a","a","b","b","c","c","c"]


console.log(compress(chars));
// console.log(compress(chars2


var compress = function(chars) {
    let count = 1;
    let start = 0;

    for (let i = 1; i <= chars.length; i++){
        let current = chars[i]
        let previous = chars[i-1]

        if (current === previous){
            count++
        } else {
            // if current value is different from previous char
            if (count === 1){
                // if count is only 1, we don't show this value, so move on and start loop again
                start = i;
                continue
            }

            // split number into array of individual numbers 12 ==> ['1', '2']
            let countStrs = count.toString().split('');
            // start will be 1 value where letter starts [a, a, b] - when else is triggered, start is at 0 so we'll be placing value at start + 1
            // count-1 will be number of digits we'll be removing -1, and ...countStrs is the values we'll insert into the array.
            chars.splice(start + 1, count-1, ...countStrs);

            // reset i to index of "current char after splice"
            i = start + countStrs.length + 1;
            start = i;
            count = 1;
        }
    }
    return chars
};
