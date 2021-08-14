/**
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
**/

/**
time complexity: O(nlogn) - due to sorting
space complexity: O(n)  - due to result array

steps:
- check edge cases
- sort intervals where starting value is sorted
- push first interval
- do a for loop for each interval and if result interval's last
item is greater than or equal to current interval, change ending
otherwise push interval to result array.
- return result.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    if (intervals.length <= 1){
        return intervals;
    }

    intervals.sort((a,b) => (a[0]-b[0]))

    let result = [intervals[0]]

    for (let interval of intervals){
        let recent_interval = result[result.length-1];
        if (recent_interval[1] >= interval[0]){
            recent_interval[1] = Math.max(recent_interval[1], interval[1])
        } else {
            result.push(interval)
        }
    }

    return result;
};
