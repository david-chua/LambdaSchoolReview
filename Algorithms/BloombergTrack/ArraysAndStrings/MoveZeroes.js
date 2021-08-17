/**
Move Zeroes

Given an integer array nums, move all the 0's to the end of it while maintaining the relative order of the non-zero elements.

Must be done in place without making a copy of the array

Sample:

Input:
nums = [0,1,0,3,12]
output= [1,3,12,0,0]

Solution, we use a two pointer approach.
One pointer will be a pointer that only stays at 0 and will perform a swap when
a 0 is found
One pointer will always move 1 step forward until left pointer landed on 0 and
this pointer is on a non-0. Otherwise, it moves forward.
**/

// While loop

function moveZeroes(nums){
  let left = 0;
  let right = 0;

  while (right < nums.length){
    if (nums[left] === 0 && nums[right] !== 0){
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
    }

    if (nums[left] !== 0){
      left++
    }
    right++
  }
}

nums = [0,1,0,3,12]

moveZeroes(nums)

console.log(nums)

// For loop

function moveZeroesForLoop(nums){
  let left = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[left] == 0 && nums[i] !== 0){
      let temp = nums[left]
      nums[left] = nums[i]
      nums[i] = temp
      left++
    }
    if(nums[left] !== 0){
      left++
    }
  }
}


nums2=[0,2,3,0,3,5]

moveZeroesForLoop(nums2);

console.log(nums2)
