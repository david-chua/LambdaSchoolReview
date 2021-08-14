/**
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.



Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]
**/

/**
Time complexity: O(n^2)
space complexity: O(2N) ==> O(n)

steps:

1. create an invalid Array that's the length of the transaction and set each value to false.
2. do a for loop to compare each value. if first transaction is greater than 1000 for amount,
set invalid to true
3. go through another for loop to compare second value for first value.
4. compare the transaction 1 with transaction 2.
if time2 - time 1 is less than 60 minutes and names are the same and city is different
set invalid to true for both transactions.
5. create a results array
6. go through invalid array and if it's true, push the transation index to the results


/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let invalid = new Array(transactions.length).fill(false);

    for (let i = 0; i < transactions.length; i++){

        let transaction1 = transactions[i].split(',');
        let [name1, time1,amount1,city1] = transaction1

        if (amount1 > 1000){
            invalid[i] = true;
        }

        for (let j = i+1; j < transactions.length; j++){
            let transaction2 = transactions[j].split(',');
            let [name2, time2, amount2, city2] = transaction2


            if (Math.abs(time2-time1) <= 60 && name1 == name2 && city1 !== city2){
                invalid[i] = true;
                invalid[j] = true;
            }
        }

    }

    let result = [];
    for (let i = 0; i < invalid.length; i++){
        if (invalid[i]){
            result.push(transactions[i])
        }
    }
    return result

};
