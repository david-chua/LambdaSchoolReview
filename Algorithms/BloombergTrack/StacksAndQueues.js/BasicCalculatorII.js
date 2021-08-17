// time: O(n), need to iterate all the string
// space: O(n), stack

var calculate = function(s) {
    let stack = []

    // organize the s into stack to be calculated
    for (let i=0; i<s.length; i++) {
        // ignore white spaces
        if (s[i] === ' ') continue

        // this detects if the current s[i] is a number and if the last
        // orgArr's element is also a number
        // this combines them together as they belong together
        if (!isNaN(stack[stack.length-1]) && !isNaN(s[i])) {
            stack[stack.length-1] += s[i]
            continue
        }

        // also combines for ex. 3-4, [3, -4] instead of [3, -, 4] just so
        // adding them is easier
        if (stack[stack.length-1] === '-' && !isNaN(s[i])) {
            stack[stack.length-1] += s[i]
            continue
        }
        stack.push(s[i])
    }

    for (let i=0; i<stack.length; i++) {
        if (stack[i] == '+' || stack[i] == '-') {
            continue
        }

        // for dealing with all '/' and '*' before adding together
        if (stack[i] == '*' || stack[i] == '/') {
            let tempSum = 0
            if (stack[i] == '/') {
                tempSum = Math.floor(Number(stack[i-1]) / Number(stack[i+1]))

                // (Number(stack[i-1]) % Number(stack[i+1])) !== 0)
                // that part is to make sure that for ex. -100/10 doesn't add
                // 1 but -5/2 does add one since floor for negatives would round up but positive would round down
                if (tempSum < 0 && (Number(stack[i-1]) % Number(stack[i+1]))
                !== 0) {
                    tempSum += 1
                }
            }

            if (stack[i] == '*') {
                tempSum = Number(stack[i-1]) * Number(stack[i+1])
            }

            // splice from the calculations and add in the newly calculated
            // value
            let sep = stack.splice(i-1, 3, tempSum.toString())

            // need to reposition the 'i' so it doesn't skip any elements
            i=i-1
        }
    }

    let totalSum = 0
    // without '*' and '/'
    for (let i=0; i<stack.length; i++) {
        if (stack[i] == '+' || stack[i] == '-') {
            continue
        }
        totalSum += Number(stack[i])
    }

    return totalSum
};
