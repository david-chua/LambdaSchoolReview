"""
Challenge #10:

Given a string of space separated integers, write a function that returns the
maximum and minimum integers.

Example:
- max_and_min("1 2 3 4 5") -> "5 1"
- max_and_min("1 2 -3 4 5") -> "5 -3"
- max_and_min("1 9 3 4 -5") -> "9 -5"

Notes:
- All inputs are valid integers.
- There will always be at least one number in the input string.
- The return string must be two numbers separated by a single space, and
the maximum number is first.
"""
def max_and_min(input_str):
    # Your code here
    # char_nums = input_str.split(' ')
    #
    # # apply a map
    # nums = list(map(int, char_nums))
    # print(nums)


    nums = [int(item) for item in input_str.split(' ')]
    nums.sort()

    max_num = max(nums)
    min_num = min(nums)
    # return str(max_num) + ' ' + str(min_num)
    # return '%d %d' % (max_num, min_num)\
    return f'{max_num} {min_num}'


my_str = "1 9 3 4 -5"


print(max_and_min(my_str))
