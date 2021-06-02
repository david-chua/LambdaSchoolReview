"""
Demonstration #2

Given a non-empty array of integers `nums`, every element appears twice except except for one. Write a function that finds the element that only appears once.

Examples:

- single_number([3,3,2]) -> 2
- single_number([5,2,3,2,3]) -> 5
- single_number([10]) -> 10
"""
def single_number(nums):
    # Your code here

    #UPER
    # input array len > 0 - all numbers
    # return a number
    # appears once
    # a num from the array

    # This code doesn't work since it doesn't keep track of values you already passed.
    # for i, num in enumerate(nums):
    #     # check if num is in rest of array
    #     if num not in nums[i + 1:]:
    #         return num


    # # This fuction runs a nested for loops = O(n^2)
    # for num in nums: # O(n)
    #     # count the number of times num appears
    #     count = nums.count(num) # O(n)
    #     if count == 1:
    #         return num

    counts = {} # O(1)
    for num in nums: # O(n)
        if num not in counts: # O(1)
            # add the number to the dictionary
            counts[num] = 1 # O(1)
        else:
            counts[num] += 1 # O(1)

    # Loop over dicitonary
    for key, value in  counts.items(): # O(n)
        if value == 1:   # O(1)
            return key   # O(1)

    # This solution splits the nested for loop and runs two single for loops
    # solution ends up becoming O(n) in terms of big O notation. 


print(single_number([3,3,2]))
print(single_number([5,2,3,2,3]))
print(single_number([10]))
