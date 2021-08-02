/** IMplement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading white space.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is positive or negative. Assume it's positive is neither is present.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer ("123" --> 123, "0032" -> 32). If no digits are read, then the integer is 0. Change sign if necessary from step 2.
5. If the integer is out of the 32-bit signed integer space (-2^31, 2^31 -1), then clamp the integer together so that it remains in the range. Specifically integers less than -2^31 should be clamped to -2^31 and integers greater than 2^31-1 should be clamped to 2^31-1
6. Return the integer as the final result.

Note:

* Only the space character ' ' is considered a whitespace character.
* Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

Example 1:

Input s = "42"
outout: 42
step 1: "42" ( no characters read because there is no white space)
step 2: " there is no + or - character
step 3: 42 is read in

parse integer is 42.

Example 2:
Input s = "   -42"
output: -42
step 1: "__-42" (leading white space is read and ignored)
step 2: -42 ( "-" is read so result is negative)
step 3: 42 is read in

parsed integer is -42.

Example 3:

Input; "4193 with words"
output: 4193

step 1: no white space
step 2: no "-" or "+"
step 3: 4193 is read in, reading stops because next character is non-digit

parsed int is 4193

Example 4;
Input: s="words and 987"
step 1: no white whitespaces
step 2: no "-" or "+"
step 3: reading stops immediately because there is non-digit 'w'.

parsed integers is 0 because no digits were read.

Example 5:
input: "-91283472332"
output: -2147483648
step 1: "-91283472332" (no characters read because there is no leading whitespace)
step 2: "-91283472332" ('-' is read so result should be negative)
step 3: "-91283472332" is read idn
parsed integer is -91283472332

Since -91283472332 is less than lower bound of the range, the final result is -2^31 = -2147483648.
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

    // Char code 48 - 57 represents number keys 0-9
    while (s[index] && s[index].charCodeAt(0) - 48 >= 0 && s[index].charCodeAt(0) - 48 <= 9) {
        num = num * 10 + (s[index].charCodeAt(0) - 48);
        index++
    }

    num = negative ? -num : num
    return num <= min ? min : num >= max ? max : num;

};
