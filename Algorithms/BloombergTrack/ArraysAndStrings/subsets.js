/**
Given an integer array nums of unique elements,
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
Return the solution in any order.


Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
**/

/**
Run time: 2^n - number of numbers becasue every iteration, we take or not take the number - ranches of logic
space: O(n) - deepest is list of number we have.
need:
subSet array list
result array list

getSubset function
- need index to know end of nums index.
- nums array
- result
- subset (current subset)

for loop from index to nums.length:
- add current subset and add it to result.
- subset.add(nums[i])
- generateSubset(index + 1, nums, current, result)
- remove last item on subset array.
**/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    getSubsets(nums, 0, [], result)
    return result;
};


let getSubsets = function(nums, index, subset, result){

    for (let i = index; i < nums.length; i++){

        // add the number to the current subset
        subset.push(nums[i]);

        // add the copy of subset to the result set
        result.push([...subset]);

        // recursively call the function to get all the subsets with the number
        getSubsets(nums, i+1, subset, result);

        // backtrack - remove the number from the current subset
        subset.pop();

    }
}
