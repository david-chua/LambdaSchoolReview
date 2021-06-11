/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let index = 0;
    let negative = false
    let num = 0;
    let max = 2**31-1
    let min = 2**31 * -1
    s = s.trim()

    if (s[index] == '-' || s[index] == "+"){
        negative = s[index] == '-'? true: false
        index++
    }

    while (s[index] && s[index].charCodeAt(0) - 48 >= 0 && s[index].charCodeAt(0) - 48 <= 9) {
        num = num * 10 + (s[index].charCodeAt(0) - 48);
        index++
    }

    num = negative ? -num : num
    return num <= min ? min : num >= max ? max : num;

};
