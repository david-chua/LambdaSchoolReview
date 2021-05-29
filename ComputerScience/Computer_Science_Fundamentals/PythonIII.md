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

# Mutability
