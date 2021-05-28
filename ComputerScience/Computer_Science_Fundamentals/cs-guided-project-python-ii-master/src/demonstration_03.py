"""
Challenge #3:

Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples:
- multiply_nums("2, 3") ➞ 6
- multiply_nums("1, 2, 3, 4") ➞ 24
- multiply_nums("54, 75, 453, 0") ➞ 0
- multiply_nums("10, -2") ➞ -20

Notes:
- Bonus: Try to complete this challenge in one line!
"""


# def multiply_nums(nums):
#     # Your code here
#     char_nums = nums.split(', ')
#     result = 1
#
#     for char_num in char_nums:
#         result = int(char_num)*result
#     return result

# conver each item in array as int 
# def multiply_nums(nums):
#     char_nums = nums.split(', ')
#     nums = list(map(int, char_nums))
#
#     result = 1
#     for num in nums:
#         result = result * num
#     return result

# you can iterate with map object
def multiply_nums(nums):
    char_nums = nums.split(', ')

    result = 1
    for num in map(int, char_nums):
        result = result * num
    return result



my_string = "1, 2, 3, 4"

# print(my_string.split(', '))

print(multiply_nums("2, 3"))
print(multiply_nums("1, 2, 3, 4"))
print(multiply_nums("54, 75, 453, 0"))
print(multiply_nums("10, -2"))
