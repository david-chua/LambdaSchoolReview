Hash Tables

Why they are awesome?

* O(1) lookups over the number of items stored in the hash table
* Maps key to value
* Python dict is a hash table

words = ["a", "b", "x", "d", "t", "x", "b", "a"]


```
for i0, w0 in enumerate(words):
  for i1, w1 in enumerate(words):
    if i0 == i1:  # Don't compare the word to itself
      continue

    if w0 == w1:
      print(f"dup {w0}")


# dup b
# dup x
# dup x
# dup b

This code is n^2.
```

Other way - still O(n^2) 

```
for i0, w0 in enumerate(words): # O(n) over the number of words
  if w0 in words[i= + 1:]: # in is O(n) on a list
    print(f"dup {w0}")
```
