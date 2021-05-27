# Python II

A module is a collection of code that is written to meet specific needs. For example, you could split up different parts of a game you were building into modules. Each module would be a separate Python file that you could manage separately.

## Follow Along

Any Python file that ends with the **.py** extension is considered a module. The name of the module is the name of the file.

To import from other modules, we can use the **import** command.

```
import math

print(math.factorial(5))
# 120
```

So, by importing the built-in math module, we have access to all of the functions and data defined in that module. We access those functions and data using dot notation, just like we do with objects.

If you only need a specific function from a module, you can import that specific function like so:

```
from math import factorial

print(factorial(5))
# 120
```

You can also import all the names from a module with this syntax to avoid using dot notation throughout your file.

```
from math import *

print(factorial(5))
# 120
print(pow(2,3))
# 8.0
```

You can also bind the module to a name of your choice by using **as**.

```
import math as alias

print(alias.factorial(5))
# 120
```

To find out which names a module defines when imported, you can use the **dir()** method.  This method returns an alphabetically sorted list of strings for all of the names defined in the module.

```
import math

print(dir(math))
# ['__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc']

```

## Basic List Operations
Lists are similar to arrays. They can store any type of variables and as many variables as you want. You can iterate over lists effortlessly.

To build a list, you can do the following:

```
my_list = [] # empty list literal
my_list.append(1) # add 1 to end of list
my_list.append(2) # add 2 to end of list
my_list.append(3) # add 3 to end of list
print(my_list[0]) # prints 1
print(my_list[1]) # prints 2
print(my_list[2]) # prints 3

# iterate over the list with for statement to print each item in my_list

for item in my_list:
  print(item)
```

In Python, if you try access a list index that does not exist, you get an **IndexError: list index out of range** message:

```
>> my_list = [1,2,3]
>> print(my_list[10])
IndexError: list index out of range
```

## Follow Along - Basic list operations

First, let's create a numbers list that contains the numbers 1,2,3

```
numbers = []
numbers.append(1)
numbers.append(2)
numbers.append(3)
```

Now, let's create a strings list that contains the strings "Lambda" and "School"

```
strings = []
strings.append("Lambda")
strings.append("School")
```

Now let's make sure we can access items from a specific index in a list. Let's access the 3rd item from numbers and the second items from strings and print them out.

```
print(numbers[2], string[1])
```

Let's iterate through our numbers list to sum up all of the numbers

```
sum = 0
for number in numbers:
  sum += number
```

## User Defined Classes

A Python object encapsulates variables (data) and functions (behavior) into a single entity. An object instance gets its variables and functions from the class that was used to instantiate it. Think of a class as a blueprint or template that you can use to create objects

## Follow Along

Let's define a class so we can use it as a blueprint for an object

```
class MyFirstClass:
  variable = "data"

  def function(self):
    return "Printing from a MyFirstClass object."
```

Now, to create an object based on **MyFirstClass**, we call the class like a function and assign the instance object to a variable.

```
a_class_object = MyFirstClass()
```

Now we can use dot notation to access variables and functiosn on the object.

```
print(a_class_object.variable)
# data
print(a_class_object.function())
# Printing from a MyFirstClass object.
```

In general, a dot expression is written as **<expression>.<name>**. The **<expression>** must evaluate to an object, and the **<name>** must be an attribute on that object.

The whole point of defining a class is so you can use the same template to create multiple objects. All of the objects you make by instantiating the class will have the attributes that were a part of the class definition.

```
another_class_object = MyFirstClass()

print(another_class_object.variable)
# data
print(another_class_object.function())
# Printing from a MyFirstClass object.
```

Notice that both **a_class_object** and **another_class_object** have access to the defined attributes in the class.
