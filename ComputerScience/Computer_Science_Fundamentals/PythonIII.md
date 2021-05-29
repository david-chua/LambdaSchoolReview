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

### Alising with Mutable Objects
