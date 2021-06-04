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
