/**
A company is planning to interview 2n people. Given the array costs where
costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a
is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n
people arrive in each city.

Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
Example 2:

Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859
Example 3:

Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086
**/

/**
idea, sorting by cheapest
steps:
1. sorting it with the difference between city a to city b.
2. go through cost array which is now sorted
3. if i < middle of costs length, this means we have gone through
half the number
4. then the rest, we use the cost of city b to add to the result.
5. return result which is an integer value.
**/


/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs = costs.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]))
    console.log(costs)

    let len = costs.length;

    let res = 0;

    for (let i = 0; i < len; i++){
        if (i < len/2) res += costs[i][0]
        else res += costs[i][1]
    }

    return res;
};


let costs = [[10,20],[30,200],[400,50],[30,20]]

console.log(twoCitySchedCost(costs));
