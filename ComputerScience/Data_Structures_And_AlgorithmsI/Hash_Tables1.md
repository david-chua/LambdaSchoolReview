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
