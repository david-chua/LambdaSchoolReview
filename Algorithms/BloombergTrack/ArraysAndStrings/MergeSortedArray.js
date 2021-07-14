/**
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and two integers m and n representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single sorted array in non-decreasing order.

The final sorted array should not be returned by the function but instead be sorted inside the array nums1. To accomodate this, nums1 has a length of m+n. where the first m elements denote the elements that hsould be merge and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums=[2,5,6], n =3
Output: [1,2,2,3,5,6]

Example 2:
Input: nums1 = [1], m=1, nums2=[], n=0
Output: [1]

Example 3:
Input: nums1=[0], m = 0, nums2=[1], n = 1
Ouptut: [1]

**/

/**
Time complexity: O(m+n)
Space complexity: O(1) unless you count the n values being created when it's added.

steps:
1. initiate last index with values coming from the arrays;
array 1 is length of m. To be in the last index, subtract 1.
array 2 is length of n. To be in the last index, subtract 1.
2. initiate endpointer which is m+n - 1 to be in the last index.
3. for loop from endpointer to 0
4. if arr2 is less than 0, all values in nums2 have been added, break
5. if nums1 at array1 pointer is greater than nums2 at array2 pointer, let nums[last Pointer] = nums1[array1 pointer]. Subtract 1 from array 1 pointer.
6. if nums2 at array2 pointer is greater or equal than nums1 at array1 pointer, let nums1[lastPointer] = nums2[array2 pointer]. Subtract 1 from array 2 pointer.
7 when loop ends, return nums1 array which should now contain m+n length and all the values of nums1 and nums2 values.
**/

let merge = function(nums1,m,nums2, n){
  let arr1 = m-1;
  let arr2 = n-1;
  let lastIndex = (m+n) -1;
  for (let i = lastIndex; i >= 0; i--){
    if (arr2 < 0){
      break;
    }
    if (nums1[arr1] > nums2[arr2]){
      nums1[i] = nums1[arr1]
      arr1--
    } else {
      nums1[i] = nums2[arr2]
      arr2--
    }
  }
  return nums1;
}


let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

console.log(merge(nums1,m,nums2,n))
