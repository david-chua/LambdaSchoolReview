/**

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106
**/

/**
Time: O(n^2)? - potential due to for loop and .shift being an O(n) run time.
Space: O(2n) - O(n) due to creating two separate arrays for start and end.

Steps:
1. create a sorted start interval where it start in order
2. create a storted end array where it places the end in order.
3. loop through array and see if start[i] is greater than or equal to first item in end. If it is, remove the first item.
4. count how many items remain on the end array.
**/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length == 0 || intervals == null){
        return 0;
    }
    const start = [...intervals].map(([start, end]) => start).sort((a, b) => a - b);
     const end = [...intervals].map(([start, end]) => end).sort((a, b) => a - b);

     for (let i = 0; i < intervals.length; i++) {
         if (start[i] >= end[0]) end.shift();
     }

     return end.length;

};

/**
heap version
time: O(n logn) - for sorting
space: O(n) - minheap
**/


/**
 * @param {number[][]} intervals
 * @return {number}
 */
 /**
  * @param {number[][]} intervals
  * @return {number}
  */
 var minMeetingRooms = function(intervals) {
     if (intervals.length == 0 || intervals == null){
         return 0;
     }

     // helper function
     const addToHeap = (element) => {
         minHeap.push(element);
     }

     let minHeap = [];
     // sort by start
     intervals.sort( (a, b) => a[0] - b[0]);
     // add iniital item in minHeap array
     minHeap = [intervals[0][1]];

     // counter of how many meetings. if there's at least one item,
     //meeting number is going to start at 1.
     let counter = 1;

     // loop through intervals array starting at index 1 since index 0
     // is already in our heap
     for(let k=1; k<intervals.length; k++){
         // if min heap start <= intervals[k][0] (end) and if minheap[0]
         //start <= interval[k] start, change the current min to the current 
         //interval.
         if(minHeap[0] <= intervals[k][1] && minHeap[0] <=intervals[k][0] ){
             minHeap[0] = intervals[k][1];
         }
         else{
         // else add element to heap array
         // increase counter
             addToHeap(intervals[k][1]);
             counter ++

         }
         minHeap.sort((a,b)=> a-b)
     }
     return counter
 };
