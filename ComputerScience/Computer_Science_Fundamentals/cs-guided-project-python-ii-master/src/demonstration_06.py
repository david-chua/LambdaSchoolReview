"""
Challenge #6:

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u as vowels for this challenge (but not y).

The input string will only consist of lower case letters and/or spaces.
"""
# def get_count(input_str):
#     # Your code here
#     amount = 0
#     for char in input_str:
#         if char in 'aeiouAEIOU':
#             amount += 1
#     return amount

def get_count(input_str):
    # Your code here
    amount = 0
    for char in input_str:
        if char.lower() in 'aeiou':
            amount += 1
    return amount

sample_str = 'auidah kEoLmno'


print(get_count(sample_str))
