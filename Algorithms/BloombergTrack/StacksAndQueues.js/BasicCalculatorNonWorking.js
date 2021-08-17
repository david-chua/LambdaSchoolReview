
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let arr = []
    for (let char of s){
        arr.push(char);
    }

    return helper(arr);
};

let helper = function(arr){
    let sign = "+";
    let num = 0;
    let stack = [];

    while (arr.length > 0){
        let cur = arr.shift();
        if (!isNaN(cur)){
            num = num * 10 + (cur - '0');
        } else if (cur == "("){
            num = helper(arr);
        }

        if (isOp(cur) || cur == ')' || arr.length == 0){
            if (sign == '+'){
                stack.push(num);
            } else if (sign == '-'){
                stack.push(-num);
            } else if (sign == '*'){
                stack.push(stack.pop() * num);
            } else if (sign == '/'){
              let lastVal = stack.pop();
              let tempSum = Math.floor(Number(lastVal) / Number(num));
              if (tempSum < 0 && (Number(lastVal) % Number(num) !== 0)){
                  tempSum+= 1
              }
              stack.push(tempSum)
            }

            num = 0;
            sign = cur;

            if (cur == ')'){
                break;
            }
        }

    }

    return sum(stack)
}

let sum = function(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    return total
}

let isOp = function(ch){
    return ch == '+' || ch == '-' || ch == '*' || ch == '/';
}
