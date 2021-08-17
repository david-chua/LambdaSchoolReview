/**
You are given an array of integers nums, there is a sliding window of size k which
is moving from the very left of the array to the very right. You can only see the k
numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:

Input: nums = [1], k = 1
Output: [1]
Example 3:

Input: nums = [1,-1], k = 1
Output: [1,-1]
Example 4:

Input: nums = [9,11], k = 2
Output: [11]
Example 5:

Input: nums = [4,-2], k = 2
Output: [4]
**/

/**
Maximum window: n-k +1; where n is length of array.

Brute force:
- for loop from 0-length

/**
Queue approach:
Time complexity:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let queue = [];

    if (k === 1) return nums;

    for (let i = 0; i < nums.length; i++){
        let num = nums[i];

        if (queue.length === 0){
            queue.push(num);
            continue;
        }

        // remove 1st from queue as that num is outside of window
        if (i >= k && queue[0] === nums[i-k]){
            queue.shift();
        }

        // remove all numbers smaller than num in queue
        while (queue[queue.length-1] < num){
            queue.pop();
        }

        // add new number to queue
        queue.push(num);

        
        if (i >= k-1){
            res.push(queue[0])
        }
    }
    return res;

};
