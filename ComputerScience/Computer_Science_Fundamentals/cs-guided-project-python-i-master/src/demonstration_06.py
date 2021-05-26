"""
Challenge #6:

Create a function that takes a string, checks if it has the same number of "x"s
and "o"s and returns either True or False.

- Return a boolean value (True or False).
- The string can contain any character.
- When no x and no o are in the string, return True.

Examples:
- XO("ooxx") ➞ True
- XO("xooxx") ➞ False
- XO("ooxXm") ➞ True (Case insensitive)
- XO("zpzpzpp") ➞ True (Returns True if no x and o)
- XO("zzoo") ➞ False
"""
# def XO(txt):
    # Your code here
    # num_x = txt.count('x')
    # num_o = txt.count('o')
    # num_X = txt.count('X')
    # num_O = txt.count('O')
    #
    # x_combined = num_x + num_X
    # o_combined = num_o + num_O
    #
    # if o_combined == x_combined:
    #     return True
    # return False


# def XO(txt):
#
#     num_x = txt.lower().count('x')
#     num_o = txt.lower().count('o')
#
#     if num_o == num_x:
#         return True
#     return False

def XO(txt):
    lower_txt = txt.lower()

    num_x = lower_txt.count('x')
    num_o = lower_txt.count('o')

    if num_o == num_x:
        return True
    return False

print(XO('ooxx'))
print(XO('xooxx'))
print(XO('ooxXm'))
print(XO('zpzpzpp'))
print(XO('zzoo'))
