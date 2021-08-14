/**
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

Example 4:

Input: coins = [1], amount = 1
Output: 1

Example 5:

Input: coins = [1], amount = 2
Output: 2
**/

/**
time: O(S* n) where S is amount n is denomination count)
space: O(n) - amount to change - store all different sub problems

steps:
- create a dp array that can store fewest number of coins to make the amount.-
it includes 0 cents.
- fill array with something that's invalid (amount + 1)
- bottom up processing
- fewest number coins of 0 is 0 so result[0] = 0;
- loop from 0 to amount including amount
- nest another loop for coins collection

inside the two for loops.
- if coins[j] <= i or i - coins[j] >= 0
- set result[i] to be as small as possible:
  - dp[i], i + result[i - coins[j]])

  can improve by sorting coins array
  - if coins[j] > i break so it doesn't continue to bigger coins
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(!coins || coins.length === 0  ||amount <= 0) {
        return 0;
    }
    const result = new Array(amount + 1).fill(amount + 1);
    result[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if(i - coins[j] >=0) {
                result[i] = Math.min(result[i], result[i - coins[j]] + 1);
            }
        }
    }
    if(result[amount] === amount + 1) {
        return -1;
    }

    return result[amount];
};
