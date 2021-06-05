# Hash Tables I

## Overview

Hash tables are also called hashmaps, maps, unordered maps, or dictionaries. A hash table is a structure that maps keys to values. This makes them extremely efficient for lookups because if you have the key, retrieving the associated value is a constant-time operation.

## Follow Along

## Time and Space Complexity

### Lookup

Hash tables have fast lookups of O(1) on average. However, in the worst case, they have slow O(n) lookups. The slow lookups happen when there is a hash collision (two different keys hash to the same index).

### Insert

Hash tables have fast insertions O(1) on average. However, in the worst case, they have slow O(n) insertions. Just like with the lookups, the worst case occurs during hash collisions.

### Delete

Hash tables have fast deletes O(1) on average. However, in the worst case scenario, they have slow O(n) deletions. The worst case occurs during hash collisions.

### Space

The space complexity of a hash table is linear O(n). Each key-value pair in the hash table will take up space in memory.


## Weaknesses

One weakness of hash tables is that mapping only goes one way. So, if you know the key, it's incredibly efficient to retrieve the mapped value to that key. However, if you know the value and want to find the key that is mapped to that value, it is inefficient. Another weakness is that if your hash function produces a lot of collisions, the hash table's time complexity gets worse and worse. This is because the underlying linked list are inefficient for lookups.


## What about Hash Collisions?

A hash collision is when our hash function returns the same index given two different keys. Theoretically there is no perfect hash function, though some are better than others. Thus, any hash table implementation has to have a strategy to deal with the scenario when two different keys hash to the same index. You can't just have a hash table overwrite the already existing value.

The most common strategy for dealing with hash collisions is not storing the value directly at an index of the hash table's array. Instead, the array index stores a pointer to a linked list. Each node in the linked list stores a key, value and a pointer to the next item in the linked list.

The above is just one of the ways to deal with hash collisions. Hopefully, you can now see why all of our hash tables operations becomes O(n) in the worst case. What is the worst case? The worst case is when all of the keys collide at the same index in our hash table. If we have ten items in our hash table, all ten items are stored in one linked list at the same index of our array. That means that our hash table has the same efficiency as a linked list in the worst case.

## Follow Along

To convert a string into an integer, hashing functions operate on the individual characters that make up the string.

In Python, we can encode strings into their bytes representation with the **.encode()** method. Once encoded, an integer represents each character.

Let's do this with the string **hello**.

```
byte_representation = "hello".encode()

for byte in byte_representation:
  print(byte)

# Print Output
# 104
# 101
# 108
# 108
# 111
```

Now that we've converted our string into a series of integers, we can manipulate those integers somehow. For simplicity's sake, we can use a simple accumulator pattern to get a sum of all the integer values.

```
byte_representation = "hello".encode()

sum = 0
for byte in byte_representation:
  sum += byte

print(sum)

## Output
532
```

We turned a string into a number. Now, let's generalize this function.

```
def my_hashing_func(str):
  byte_representation = str.encode();

  sum = 0
  for byte in byte_representation:
    sum += byte

  return sum
```


We aren't done yet. As shown earlier, **hello** returns 532. But what if our hash table only has ten slots. We have to make 532 a number less than 10.

Remember the modulo operator? We can use that in our hashing function to ensure that the integer the function returns is within a specific range.

```
def my_hashing_func(str, table_size):
  byte_representation = str.encode()

  sum = 0
  for byte in byte_representation:
    sum += byte

  return sum % table_size
```


## Overview

We define a hash table as an empty array and hash functions as the function that takes a value and converts it into an array index where you will store that value. Let's put the two together. Let's implement a **HashTable** class where we can:

* Insert value into a hash table
* Retrieve value from a hash table
* Delete values from a hash table

Let's start with the insert function. For insert, I need to insert a value with an associated key. Let's store the instructors at Lambda and whee they live. We want to store:

* { "Parth", "California"}
* { "Beej", "Oregon"}
* { "Dustin", "Utah"}
* { "Ryan", "Utah"}

Here's what our **HashTable** class looks like right now:

```
class HashTable:

  """
  A hash table with 'capacity' buckets
  that accepts string keys
  """

  def __init__(self, capacity):
    self.capacity = capacity # Number of buckets in the hash table
    self.storage = [None] * capacity
    self.item_count = 0

  def get_num_slots(self):
    """
    Return the length of the list you're using to hold the hash table data. (Not the number of items stored in the hash table but the number of slots in the main list.)
    One of the tests relies on this.
    """

    return len(self.storage)

  def djb2(self, key):
    """
    DJB@ hash, 32-it
    """

    # Cast the key to a string and get bytes
    str_key = str(key).encode()

    # Start from an arbitrary large prime
    hash_value = 5381

    # Bit-shift and s um value for each character
    for b in str_key:
      hash_value = ((hash_value << 5) + hash_value) + b
      hash_value &= 0xfffffff #DJB2 is a 32 bit hash, only keep 32 bits.

    return hash_value

  def hash_index(self, key):
    """
    Take an arbitrary key and return a valid integer index within the hash table's storage
    """
    return self.djb2(key) % self.capacity

  def put(self, key, value):
    """
    Store the value with the given key
    """

  def delete(self, key):
    """
    Remove the value stored with the given key
    Print a warning if the key is not found.
    """

  def get(self, key):
    """
    Retrieve the value stored with the given key.
    Returns none if the key is not found.
    """
```

Let's break this down a little bit. Our **init** function takes in the length of a hash table and creates an empty array. Our **hash_index** function takes a key and computes and index using the famous **djb2** hash function. Let's implement the other function (put, delete, get).

## Follow Along

### The **put** method

Let's create our put function. Before we code, let's break down what needs to happen:

  * Given a key and a value, insert the respective value into a hash table array using the hashed key to determine the storage location index.

Let's think about what we need to do:

  * Hash the key into an index using the hash function
  * Put the value into that index.

You might be thinking. "What if two keys hash to the same index?" That's a great question, and we will worry about that later. It's a nifty solution. But for now, let's worry about hashing a key and storing a value.

First let's call the hash function and store the return value in index:

```
def put(self, key, value):
  """
  Store teh value with the given key
  """
  index = self.hash_index(key)
```

Next, let's insert the value at that index:

```
def put(self, key, value):
  """
  Store the value with the given key
  """

  index =  self.hash_index(key)
  self.storage[index] = value
  return
```

There we go. Given a key, we hashed it and inserted  a value. Again, we will worry about colliding indices later.

### The **delete** method

Next, let's write our **delete** method. What does this method do? We can think of it as the inverse of the put function that we just defined. The function will receive a key as its input, then pass that key through the hash function to get the index where the hash table's value needs to be deleted.

Let's start by getting the index by passing the key through the hashing function:

```
def delete(self, key):
  """
  Remove the value stored with the given key
  """
  index = self.hash_index(key)
```

Next, we need to delete the value from the index in our storage by setting it to None. Remember, we aren't dealing with collisions in this example. If we had to deal with collisions, this would be more complex.

```
def delete(self,  key):
  """
  Remove the value stored with the given key
  """
  index = self.hash_index(key)
  self.storage[index] = None
```

## The **get** method

The last method we need to deal with is our **get** method. Get is a simple method that retrieves the value stored at a specific key. The function needs to receive a key as an input, pass that key through the hashing function to find the index where the value is stored, and then return the value at that index.

Let's start by getting the index from the key:

```
def get(self, key):
  """
  Retrieve the value stored with the given key
  Return None if the key is not found.
  """
  index = self.hash_index(key)
```

Next, we need to return the value that is stored at the index.

```
def get(self,key):
  """
  Retrieve the value stored with the given key
  Return None if the key is not found.
  """
  index = self.hash_index(key)
  return self.storage[index]
```
