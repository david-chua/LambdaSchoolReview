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
| FActorial O(n!)               | As the input size increases, the runtime will grow astronomically, even with relatively small inputs. This solution is exceptionally inefficinet|
