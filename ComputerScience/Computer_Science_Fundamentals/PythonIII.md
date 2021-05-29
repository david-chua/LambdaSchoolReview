# Python III

## Basic Dictionary Operations

A dictionary is like a list, but instead of accessing values with an index, you access values with a "key". A "key" can be any type of object (string, number, list, etc). Also, unlike lists, dictionaries do not have an order.

## Follow Along

Let's use a dictionary to create a collection that maps first names as keys (strings) to phone numbers as values.

```
phonebook = {} # creates an empty dictionary
phonebook["Abe"] = 459874321
phonebook["Bill"] = 7659803241
phonebook["Barry"] = 6573214789

print(phonebook)
# {'Abe': 459874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

Instead of adding one key-value pair at a time, we can initialize the dictionary to have the same values.

```
phonebook = {
  "Abe": 459874321,
  "Bill": 7659803241,
  "Barry": 6573214789
}

print(phonebook)
# {'Abe': 459874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

We can iterate over a dictionary as we iterated over a list. We can use the items() method, which returns a tuple with a key and value for each item in the dictionary.

```
for name, number in phonebook.items():
  print("Name: %s, Number: %s" % (name, number))

# Name: Abe, Number: 459874321
# Name: Bill, Number: 7659803241
# Name: Barry, Number: 6573214789
```

To remove a key-value pair from a dictionary, you need to use the **dell** keyword or use the **pop()** method available on dictionary objects. The difference is **pop()** deletes the item from the dictionary and returns the value. When you use the **del** keyword, you've written a statement that doesn't evaluate to anything.

```
phonebook = {
  "Abe": 459874321,
  "Bill": 7659803241,
  "Barry": 6573214789
}

del phonebook["Abe"]


print(phonebook.pop("Bill"))
# 7659803241
```

## Mutability

In Python, everything is an object.

```
a = 1
b = "hello"
c = [1,2,3]
isinstance(a, object) # True
isinstance(b, object) # True
isinstance(c, object) # True
```

Additionally, all objects in Python have three things:

1. Identity
2. Type
3. Value

```
a = 1
# identity
id(a)
4483165816

# Type
type(a)
<class 'int'>

# Value
a
1
```

## Follow Along

### Identity

An object's identity can never change once it has been created. You can think of an object's identity as its specific address in memory. In the code above, a = 1 created a new object in memory whose identity is represented by the integer 4483165816.

Python has an **is** operator that allows you to compare two object's identities:

```
a = 1
b = 2
a is b # False
b = a
a is b # True
```

In the code above, we first assign **1** to the variable **a**. Then, we assign **2** to the variable **b**. These are two different objects in memory and thus have different identities. We verify that they are different by using the **is** operator which returns **False**. The line **b=a** assigns the variable **b** the object that the variable **a** is pointed to. Now, both **a** and **b** are referencing the same object in memory. We can use the **id()** function to verify that this is the case as well.

```
id(a)
4483164816
id(b)
4483164816
```

### Type

The type of an object determines what are its possible values and what operations the object supports. The **type()** function will return what type an object is:

```
a = 'Hello'
type(a) # <class 'str'>
b = 100
type(b) # <class 'int'>
c = True
type(c) # <class 'bool'>
```

Just like an object's identity, once an object is created, its identity can never change. It's an object's type that determines whether an object is **mutable** or **immutable**

### Value

The value of some objects can be changed after they are created. The value of some objects cannot be changed after they are created. If the object's value can be changed, that object is considered **mutable** (changeable). If the object's value cannot be changed, that object is considered to be  **immutable** (unchangeable)

### Mutable Objects

A mutable object is an object whose value can be changed after it is created. The word mutable is defined as:

liable to change

The following types of objects are mutable:

* list
* set
* dict
* byte array
* instances of user-defined classes

Let's look at sample code:

### Lists

```
my_list = ['laughter', 'happiness', 'love']
type(my_list)
<class 'list'>
my_list[2] = 'joy'
my_list.append('excellent')
my_list
['laughter', 'happiness', 'joy', 'excellent']
```

In the first line, we created a list object with three elements and assign it to the variable **my_list**. Then, because lists are mutable, we changed 'love' at index 2 to be 'joy' instead. We also can grow our list by appending a new element to the list.

### Sets

```
my_set = { 'laughter', 'happiness', 'love'}
type(my_set)
<class 'set'>
my_set.add('happy')
my_set
{'love', 'happy', 'happiness', 'laughter'}
my_set.remove('happiness')
my_set
{'love', 'happy', 'laughter'}
```

In the first line, we created a set object with three elements and assign it to the variable **my_set**. Because set objects are mutable, we can add **'happy'** to the set and remove **'happiness'**

### Dicts

```
my_dict = {"first_name": "Mattieu", "last_name": "Ricard"}
type(my_dict)
<class 'dict'>
my_dict['location'] = 'Nepal'
my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard', 'location': 'Nepal'}
del my_dict['location']
my_dict
{"first_name": "Mattieu", "last_name": "Ricard"}
```

On line one, we create a dict object that has two key-value pairs. Then, because dict objects are mutable, we add key-value pair "location": "Nepal". Last, we delete that same key-value pair.

Mutable objects work great when you know you will likely need to change the size of the object as you use and interact with it. Changing mutable objects is cheap (because you don't have to copy all existing elements to a new object).

## Immutable Objects

An immutable object is an object whose value cannot be changed after it is created. Immutable means not changeable. Anytime you try to update the value of an immutable object, a new object is created instead.

The following types are immutable:

* Numbers (int, float, complex)
* Strings
* Bytes
* Booleans
* Tuples

Immutable objects are useful when you want to make sure that the object you created will always maintain the same value. Immutable objects are more expensive to change (in terms of time and space complexity) because changing the object requires making a copy of the existing object.

Let's look at a few examples:

### Numbers

```
my_int = 1
id(my_int) # 4513307280
type(my_int) # <class 'int'>
my_int  # 1
my_int = 2
id(my_int) # 4513307312
type(my_int) <class 'int'>
my_int # 2
```

In the code above, the first line creates a new int object, and the variable my_int now points at the object. You can see this object has in for its type and a specific id for its identity and a 1 for its value.

Then we assign 2 to my_int which creates a new object and assigns it to the variable my_int. This object has int for its type and a new id and 2 for its value.

### Strings

```
my_str = 'a'
type(my_str) # <class 'str'>
id(my_str) # 140716674193840
my_str # 'a'
my_str += 'b'
type(my_str) # <class 'str'>
id(my_str) # 140716674658992
my_str # 'ab'
```

So, on line 1, we create a string object with the value 'a' and assign it to the variable my_str. We verify that the object is of type str and with get the specific id.
Then we concatenate 'b' on the existing string with the line **my_str += 'b'**. Now, because string objects are immutable, we cannot change a string object's value after it has been created. To concatenate, we create a new string object and assign the value **'ab'** to that object.

This behavior in Python is vital to be aware of when working with string concatenation. If you have to add and remove frequently from a string, this will be inefficient if you work with string objects directly.

### Tuples

Tuples are an immutable container of names, where each name has unchangeable (immutable) binding to an object in memory. You cannot change the bindings of the names to the objects.

```
my_tuple = ('love', [1,2,3], True)
my_tuple[0] # 'love'
my_tuple[0] = 'laughter'
Traceback (most recent call last):
 File "<stdin", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```

Here we created a tuple using ( and ) to denote the tuple literate syntax. Just like a list, tuples can contain elements of any type. Above, we've included a string, a list, and a boolean as our tuple elements. We are proving the tuple objects immutability by showing the error that occurs when trying to assign a new item to a position in the tuple.

One thing that often causes confusion surrounding the immutability of tuples in Python is demonstrated by the following behavior.

```
my_tuple[1] = [4,5,6]
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
id(my_tuple[1])
140715574620864

my_tuple[1][0] = 4
my_tuple[1][1] = 5
my_tuple[1][2] = 6
my_tuple[1]   # [4,5,6]
my_tuple # ('love', [4,5,6], True)
id(my_tuple[1]) # 140715574620864
```

Notice that we cannot create a new list object and bind it to the name at position 1 of our tuple. This is demonstrated when **my_tuple[1] = [4,5,6]** raises a **TypeError**. However, we can assign new objects to the list that is at position 1 of our Tuple? Why is that? This is because List are mutable objects. So we can modify a list without creating a new object. So, when we are modifying the list directly (instead of assigning new objects), it doesn't affect our tuple's immutability. Notice that the identity (140715574620864) of the list at **my_tuple[1]** doesn't change after replacing its three list elements.

### Passing Objects to Functions

Mutable and immutable objects are not treated the same when they are passed as arguments to functions. When mutable objects are passed into a function, they are passed by reference. So, supposed you change the mutable object that was passed in as an argument. In that case, you are changing the original object as well.


## Time Complexity

### What is an algorithm?

An algorithm is a set of instructions for accomplishing task. Within this broad definition, we could call every piece of code an algorithm.

## How do we measure how "good" an algorithm is?

After coming up with a first-pass solution to a problem, we need to measure how "good" our answer is. Will it stand up to the test of millions of users? Is it fast enough that our users will be blown away by how quickly they get their results? Or will torturously slow speeds cause lag that scares them all away?

When given a choice between different algorithms, we want to choose the most efficient algorithm (considering both *time* and *space* efficiency depending on our needs).

Note: It is common for your first solution to work with a few items or users and break as you add more. Making sure that the solutions scale is something all developers must look out for.

### What is Big O Notation?

We need a way to talk about efficiency (number of operations in the worst case) in a more general sense.

Big O notation is the language we use for describing how efficient an algorithm is.

The specific terms of Big O notation describe how fast the runtime grows (relative to the input size), focusing on when the input gets extremely large.

Why do we focus on growth of runtime versus exact runtime? The actual runtime depends on the specific computer running the algorithm, so we cannot compare efficiencies that way. By focusing on the general growth, we can avoid exact runtime differences between machines and environments.

We also talk about runtime relative to the input size because we need to express our speed in terms of something. So we show how the speed of the algorithm in terms of the input size. That way, we can see how the speed reacts as the input size grows.

We don't care about speed when the input size is small. The difference in speed are likely to be minimal when the input size is small. When the input size gets enormous, we can see the differences in efficiency between algorithms.

### Common Big O Run Times

Refer to the table below to see a list of the most common runtimes. The table is ordered from fastest to slowest

| Classification                |  Description                           |
|-------------------------------|----------------------------------------|
| Constant O(1)                 | The runtime is entirely unaffected by the input size. This is the ideal solution |
| Logarithmic O(log n)          | As the input size increases, the runtime will grow only slower. This is a pretty good solution |
| Linear O(n)                   | As the input size increases, the runtime will grow at the same rate. This is a pretty good solution |
| Polynomial O (n^c)            | As the input size increases, the runtime will grow at a faster rate. This might work for small inputs but not scalable. |
| Exponential O(c^n)            | As the input size increases, the runtime will grow at a much faster rate. This solution is inefficient  |
| Factorial O(n!)               | As the input size increases, the runtime will grow astronomically, even with relatively small inputs. This solution is exceptionally inefficient|


### A few examples:

### Contant Time:

```
def print_only_one_thing(list_of_things):
  print(list_of_things[0])
```

This is constant time because no matter how large or small the input is, the number of computation within the function is the same.

### Linear Time O(n)

```
def print_list(list_of_things):
  for thing in list_of_things:
    print(thing)
```

This is linear because the speed of the algorithm increases at the same rate as its input size. If list of things has 10 items, then the function will print 10 times. If it has 10,000 items, then the function will print 10,000 times.

### Quadratic Time O(n^2)

```
def print_permutation(list_of_things):
  for thing_one in list_of_things:
    for thing_two in list_of_things:
      print(thing_one, thing_two)
```

Why is this quadratic? The clue is the nested loops. These nested loops mean that for each item in list_of_things (the outer loop), we iterate through every item in list_of_things(the inner loop) For an input size of n, we have to print n * n times or n^2 times.

### What are we supposed to do with constants?

What if we had a function like this?

```
def do_a_bunch_of_stuff(list_of_things): # (1 + n/2 + 2000)
  last_idx = len(list_of_things) - 1
  print(list_of_things[last_idx]0 # O(1))

  middle_idx = len(list_of_things) /2
  idx = 0
  while idx < middle_idx: # O(n/2)
    print(list_of_things[idx])
    idx = idx + 1

  for num in range(2000): # O(2000)
    print(num)
```

**print(item[last_idx])** is constant time because it doesn't change as the input changes. So that portion of the function is O(1).

the while loop that prints up to the middle is 1/2 of whatever the input size is; we can say that portion is O(n/2).

The final portion will run 2000 times, no matter the size of the input.

so putting it all together, we could say that the efficiency is **O(1 + n/2 + 2000);

However, we don't say this. We describe this function as having linear time O(n) because we drop all of the constants. Why do we cut all of the constants? Because as the input size gets huge, adding 2000 or diving by 2 has minimal effect on the algorithm's performance.

## Most Significant Term

Let's consider the following function:

```
def do_different_things_in_the_same_function(list_of_things): # O(n + n^2)
  # print all each item in the list
  for thing in list_of_things: # O(n)
    print(thing)

  # print every psosible pair of things in the list
  for thing_one in list_of_things:  O(n*n) = O(n^2)
    for thing_two in list_of_things:
      print(thing_one, thing_two)
```

We could describe this function as O(n + n^2); however, we only need to keep the essential term, **n^2**, so this would be O(n^2). This is because as the input size(n) gets larger and larger, the less significant terms have less effect and only the most significant term is important.

### Big O Represents Worst Case

Let's consider the following function:

```
def find_thing(list_of_things, things_we_are_trying_to_find):
  for thing in list_of_things:
    if thing == things_we_are_trying_to_find:
      return True
  return False
```

What would the result be if it just so happens that the **things_we_are_trying_to_find** in **list_of_things** is the very first item in the list? The function would only have to look at one item in the **list_of_things** before returning. IN this case, it would be O(1). But when we talk about a function's complexity, we usually assume the worst case. What would be the worst case? It would be if it were the last item in **list_of_things**. In that case, we would have to look through all of the **list_of_things** and that complexity would be **O(n)**.

*Note: When talking about runtime complexity in casual conversation, engineers often blur the distinction between big theta and big O notation. In reality, these two are  distinct ways of describing an algorithm. Big theta gives both an upper and lower bound for the running time. Big O only provides an upper bound.*

## Do constants ever matter?

Complexity analysis with Big O notation is a valuable tool. It would be best if you got in the habit of thinking about the efficiency of the algorithms you write and use in your code. However, just because two algorithms have the same Big O notation doesn't mean they are equal.

Imagine you have a script that takes 1 hour to run. By improving the function, you can divide that runtime by 6 and now it only takes 10 minutes to run. With Big O notation, **O(n)** and **O(n/6)** can both be written as **O(n)**, but that doesn't mean it isn't worth optimizing the script to save 50 minutes every time the script runs.

That being said, there is a term you should become familiar with: **premature optimization**. Sometimes, you can sacrifice readability or spend too much time on something to improve its efficiency. Depending on the situation, it could be that having a finished product to iterate on is more important than maximally efficient code. It is your job as a developer to know when making your code more efficient is necessary. You will always be making calculated tradeoffs between runtime, memory, development time, readability, and maintainability. It takes time to develop the wisdom to strike the right balance depending on the scenario.

## Follow Along

Let's look at a few code snippets and classify their runtime using Big O notation.

```
def foo(n):
  i = 1
  while i < n
    print(i)
    i *= 2
```

First, let's think about what the above function is doing. It's printing i, but i is not being incremented by 1, as we usually see. It's doubled every time we run a loop. So for example, if n = 100, then the final results would be...

1
2
4
8
16
32
64

or if n = 10, then we would print ...

1
2
4
8

We can use the process of elimination to narrow down which runtime classification makes sense for this algorithm. The number of times the loop runs seems to vary based on the value of **n** , so this is NOT O(1).

From the above examples, we can also see that the number of times the loop runs is increasing slower than the input size is increasing **n** must be doubled before the loop will run one more time. We can eliminate classifications such as O(n log n), O(n^c), O(c^n), and O(n!).

The only two options left at this point are logarithmic and linear. Since the two growth rates (input and number of operations) are not the same, this must run in logarithmic time.

## Space Complexity

## Overview

WE often want to compare an algorithm's time  complexity (how efficiently the number of operations grow as the input size increases). Similarly, we also want to compare the space complexity of an algorithm.

Talking about space complexity is very similar to talking about time complexity. Except with space complexity, we are looking at the efficiency of memory usage instead of number of operations.

Often, it isn't easy to optimize for time and space at the same time. For instance, by increasing time efficiency, you may need to use more memory and decrease space complexity. This is not always the case, but you have to decide if you are optimizing for space or time complexity because of this.


## Follow Along

This function takes O(1) space:

```
def print_something_a_certain_number_of_times(thing_to_print, number_of_times):
  for i in range(number_of_times):
    print(thing_to_print)
```

The function above has a constant O(1) space complexity because no matter how large **n** gets, the amount of memory being used stays the same.

This function  takes **O(n)** space:

```
def append_to_list_a_certain_number_of_times(number_of_times):
  # create an empty list
  my_list = []

  # append to the list the number of times specified by the caller
  for _ in range(n):
    my_list.append('lambda')
  return my_list
```

We are often referring to additional space when we talk about space complexity - meaning that we do not include the memory used by the inputs.

This function takes constant space O(1) even though the input has n items.

```
def get_the_max(items_list):
  maximum = flaot("-inf")
  for item in items_list:
    if item > maximum:  
      maximum = item

  return maximuum
```

## Overview -  List Comprehensions

List comprehensions are a potent tool. With a list comprehension, you can create a new list based on another list in a single, highly readable line.

The format of a list comprehension follows this syntax:

**[<map expression> for <name> in <sequence expression> if <filter expression>]**

## Follow Along

If you are using a **for** loop to map a list onto a new list or filter an existing list, a list comprehension can be a better option.

Here is an example of replacing a **for** loop used to map word lengths with a single line with a list comprehension


```
sentence = "Every moment is a fresh beginning"
words = sentence.split()
word_lengths = []

# Using a for loop
for word in words:
  word_lengths.append(len(word))

print(words) # ['Every', 'moment', 'is', 'a', 'fresh', 'beginning']
print(word_lengths) # [5,6,2,1,5 10]

# Using a list comprehension
word_lengths = [len(word) for word in words]

print(word_lengths) # [5, 6, 2, 1, 5, 10]
```

Here is an example of replacing a **for** loop used to filter out odd numbers f rom a list with a list comprehension

```
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []

# Using a for loop
for number in numbers:
  if numbers % 2 == 0:
    even_numbers.append(number)

print(even_numbers) #[2, 4, 6, 8, 10]

# Using a list comprehension
even_numbers = [ number for number in numbers if number % 2 == 0 ]

print(even_numbers) # [2, 4, 6, 8, 10]
```

You can also write a list comprehension that maps and filters simultaneously. Let's go back to our sentence example and only track word lengths that are greater than 2.

```
sentence = 'Every moment is a fresh beginning.'
words = sentence.split()
word_lengths = []

# Using a for loop
for word in words:
  if len(word) > 2:
    word_lengths.append(len(word))

print(words) # ['Every', 'moment', 'is', 'a', 'fresh', 'beginning']
print(word_lengths) # [5, 6, 5, 10]

# Using a list comprehension
word_lengths = [len(word) for word in words if len(word) > 2]

print(word_lengths) # [5, 6, 5, 10]
