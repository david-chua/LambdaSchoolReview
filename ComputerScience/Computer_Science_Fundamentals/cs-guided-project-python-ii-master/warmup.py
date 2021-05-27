# import math

# avoiding importing entire library, you can import smaller modules

# from math import factorial

# import everything wihtout having to use dot notation
# from math import *

# import math as mathematics
#
# print(mathematics.factorial(5))
#


import math
from module import some_func

# print(dir(math))


"""
Import the "math" module. Then, print an alphabetically sorted list of all the functions available in the "math" module that starts with letters "is".
"""

func_list = []
for func in dir(math):
    if func.startswith('is'):
        func_list.append(func)

print(sorted(func_list))


some_func()
