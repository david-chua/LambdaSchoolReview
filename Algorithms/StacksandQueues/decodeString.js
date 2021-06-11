var decodeString = function(s) {
    let numStack = []
    let strStack = []
    let answer = ""
    let index = 0

    while(index < s.length){
        if (!isNaN(s.charAt(index))){
          count = 0;
          while (!isNaN(s.charAt(index))){
            count = 10 * count + (s.charAt(index) - 0)
            index++;
          }
          numStack.push(count)
        } else if (s.charAt(index) == '['){
          strStack.push(answer)
          answer = ""
          index++
        } else if (s.charAt(index) == ']'){
          let tempStr = strStack.pop();
          let count = numStack.pop();
          for (let i = 0; i < count; i++){
            tempStr += answer
          }
          answer = tempStr.toString();
          index++
        } else {
          answer += s.charAt(index);
          index++
        }
    }
    return answer

};

s = "3[a]2[bc]"
console.log(decodeString(s));

s2 = "abc10[cd]xyz"

console.log(decodeString(s2))

s3 = "a2[bc2[d3[ab]]]"

console.log(decodeString(s3))
