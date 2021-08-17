
/**
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Explanation: index 0,1 and index 1,2

**/

/**
Brute force:

generate all subarrays
**/

/**
hashmap
if you're at a current sum and sum - k = k
the array between those two points is size k

start with (0,1)
we see a 3 ( (0,1), (3,1))
We see 4, sum = 7 sum-k = 0, we've seen a 0,
so sum = 7, count = 1 : map: ((0,1), (3,1), (7,1))
we see a 7: sum = 14 sum -k = 14 - 7, and
we've seen a 7 map: ((0,1), (3,1), (7,2), (14,1))

**/


// var subArraySum = function(nums, k){
//   let sum = 0;
//   let count = 0;
//   let map = new Map();
//   map.set(0,1)
//
//   for (let i = 0; i < nums.length; i++){
//     sum+= nums[i];
//
//     if (map.has(sum-k)){
//       count += map.get(sum-k);
//     }
//
//     map.set(sum, (map.has(sum) ? map.get(sum): 0) + 1);
//   }
//
//   return result;
// }



var subArraySum = function(nums, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
    map.set(0,1);
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(map.has(sum-k)) {
            count += map.get(sum-k);
        }
        map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1);
        // if map has property, get it or change it to 0 and add 1.
    }
    return count;
};


let arr = [3,4,7,2,-3,1,4,2]

console.log(subArraySum(arr,7))


/**
[]

**/
