// O(n) run time and O(n) space
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
    let op = '+';
    let value = 0;
    let values = [];

    while (arr.length > 0){
        let ch = arr.shift();
        if (!isNaN(ch)){
            value = value * 10 + (ch-'0');
        } else if (ch == '('){
            value = helper(arr);
        }

        if (isOp(ch) || ch==')' || arr.length == 0){
            if (op == '+') {
                values.push(value);
            } else if (op == '-') {
                values.push(-value);
            } else if (op == '*') {
                values.push(values.pop() * value);
            } else if (op == '/') {
                let lastVal = values.pop();
                let tempSum = Math.floor(Number(lastVal) / Number(value));
                if (tempSum < 0 && (Number(lastVal) % Number(value) !== 0)){
                    tempSum+= 1
                }
                values.push(tempSum)
            }

            value = 0;
            op = ch;

            if (ch == ')') {
                break;
            }
        }

    }

    return sum(values)

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
