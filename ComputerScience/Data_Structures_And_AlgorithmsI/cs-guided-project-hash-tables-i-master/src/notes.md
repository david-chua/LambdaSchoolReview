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

Using hash tables
```
d = {}

for w in words: # O(n) over the number of words
  if w not in d:
    d[w] = 0
  d[w] += 1


for k in d: # O(n) over the number of kesy in the dictionary
  if d[k] > 1:
    print(f"We found {d[k]} ' {k}'s")
```

# {'a': 1, 'b': 2, 'x': 2, 'd': 1, 't': 1, 's': 1}


def fib(n):
  if n == 0: return 0
  if n == 1: return 1

  return fib(n-1) + fib(n-2)s
