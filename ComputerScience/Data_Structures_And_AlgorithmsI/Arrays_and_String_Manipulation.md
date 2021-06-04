# Array and String Manipulation

## Overview

Python does not have a static array data type. However, lists are built on dynamic arrays. As you will see, arrays rely on an underlying static array to work. So while you won't be creating and using this data structure directly, it is still essential to understand.

A data structure is a structure that is designed for holding information in a particular way. A static array is a data structure that is designed for storing information sequentially. For example, if you were to store the English alphabet in a static array, you would expect 'B' character to be right next to 'A' and 'C'. Additionally, every position within the static array is labeled with an index. So if you want to access the first item in the static array, you would expect that item to have an index of 0. The second item with 1, and so on.

## Follow Along

### Time and Space complexity

### Lookup

To look up an item by index in array is constant time O(1). If you have the specific index of an object in an array, the computations to find that item in memory are all constant times as well.

### Append

Adding an item to an array is constant time O(1). We always have a reference point to the last thing in a static array, so we can insert an item after the current end.

### Insert

Unless you are inserting an item at the end of the list, items must be shifted over to make room for the new information you add to the static array. It's like if you had a chain of people stretched out holding hands in a line, The first person in the line is butted right up against a wall and there is no room on one side of him. If someone wanted to join the end of the line, the people already in the line wouldn't have to do anything O(1). However, if you wanted to join the beginning of the line, every single person would have to move over (away from the wall O(n)) so that you would have room to join. If you wanted to join the line somewhere in the middle, only the people on one side has to move to make room for you.

### Delete

Just like insertions, deletions are only O(1) efficient if you're removing from end of line. If you're removing from beginning, all items have to shift over to remove any empty spaces. As arrays are sequential, it needs to cover the empty spaces, thus removing from anywhere but the end, deletions are O(n).

### Space

The space complexity of an array is linear O(n). Each item in the array will take up space in memory.

### Strengths

Static arrays are great to use when you need a data structure to retrieve information from a specific index efficiently. This is because, as we explained earlier, accessing any specific index in a static array involves a simple mathematical computation (starting index + (size of each item * index)). This computation is done in O(1) time and is not affected by the static array size at all. If you need a data structure where you are likely only to append items (add them to the end of the list), a static array also works great. When you add a new item to the end of the list, nothing has to be shifted over or moved in memory, so that operation is very efficient O(1).

### Weaknesses

There are situations where static arrays are not the best data structure to use for storing information. What about if you don't know how much information you need to store? Or if the amount of information you need to store is likely to fluctuate or change frequently. In this case, a static array is not good. The reason is that when you create a static array, you have to know and declare the size of the array. That way, your computer can separate off a chunk of memory that is the exact right size for storing that static array. If you run out of room in the static array, you can't simply make it bigger, you have to create a brand new, bigger static array. You have to copy each item from the first static array into the newer, bigger one.

Another reason that static arrays are not always the best choice to use for storing information is that they are inefficient unless you are performing operations at the end of the static array. They are inefficient because if you want to insert or delete something at the beginning (or the middle of the list), all the items to the right of the index must be moved over. If you delete something, everything has to be shifted over, so there isn't an empty index in the middle of your data. If you insert something, all the items have to shift over to make room for the new item before insertin it.

## What about array slicing?

You often encounter a scenario where you want to use a subset of items from an existing array. Array slicing is when you take a subset from an existing array and allocate a new array with just the items from the slice.

In Python, the syntax looks like this:

```
my_list[start_index: end_index]
```

The default start index is 0, and if you leave off the end_index, the slice will capture through the end of the list.

```
my_list[:] # This would be all of the items in my list
my_list[:5] # This would be the items from index 0 to 4
my_list[5:] # This would be items from index 5 to the end of the list.
```

You might be wondering, what is the time and space complexity of slicing an array? To understand the complexity, you need to know what is happening behind the scenes when you take a slice of an array. First, you are actually allocating a new list. Second, you copy all of the items in your slice from the original array into the newly allocated list. This means that you have an **O(n)** time cost (for the copying) and an **O(n)** space cost for the newly allocated list.

## Overview

### In-Place

An in-place function modifies or destroys  the state of the input data when it is run. For instance, if you write a function that squares every integer in an input list, an in-place version of the function would change the data in the list that was passed in. It would not create a new list and return the new list. In-place functions are more space efficient because they don't create new variables directly tied to the input size. However, to get the space efficiency, you have to risk that the function's user may end up changing state to the input accidentally.

Imagine a scenario where you have an antique map that you are using to navigate on a hike. You end up needing directions and when you come across another hiker, you ask them for help. The person helping you has two options. They can take your antique map, use a pen, and mark it up with their notations that will help you navigate. However, you most likely didn't want those annotations to be on your map forever. The other option would be to find another piece of paper and have the person helping you write out their annotations on that. This way, your original antique map doesn't have to be modified. However, now you have two maps that you have to carry around on your hike.

### Out of Place

In contrast to in-place functions, out of place functions don't modify or destroy the input state when they are run. Any changes done to the input are done to a copy of the input, not the original that was passed in. This is why they are less space efficient. If you have a list of 1,000,000 items that you want to square, you first have to make a copy of that list. Now, you have two lists of 1,000,000 items. However, you avoid side-effects that might be unintended.

### Pass By Reference or Value

In Python, some function arguments are passed in by their actual value, and some are passed in as a reference to the object in memory. Primitive values like integers, floats, and strings are passed in by their actual value. So, if you call a function and pass in the integer **2** when you reference that value by the name parameter of the function, you can't change **2** in memory. However, non-primitive objects like lists or dictionaries are passed in as references to that object in memory. So, if you call a function and pass in the dictionary **{"name": "Matt"} when you reference that dictionary using the name parameter, you are changing the original object that was passed in. For objects that are passed in by reference, they must be copied to a new variable before they are modified if you want to avoid side effects.

### When should I use in an in-place function or algorithm?

It would be best if you always defaulted to using an out of place function. This is a safer default to avoid unintended side-effects in your program. However, there are scenarios that you might encounter where you need to be extremely space-efficient. In that case, you might have to use an in-place function to work within the particular space-constraints you've been given.


## Follow Along

Here is an example of a function that triples each number in an input list. This function does this in-place.

```
def append_exclamations(str_list):
  for idx, item in enumerate(str_list):
    str_list[idex] += "!"
```

Now, since this is an in-place function, what happens when we use it:

```
my_list = ["Matt", "Beej", "Sean"]
append_exclamations(my_list)
print(my_list)  # ['Matt!', 'Beej!', 'Sean!']
```

my_list was modified when I called the function and the function only returned the default return value of **None**.

Let's now write a similar function, but this time do it out of place.

```
def append_exclamations(str_list):
  # create a new empty list that has the same length as the input list
  loud_list = [None] * len(str_list)
  for idx, item in enumerate(str_list):
    # insert the modified string into the new list
    loud_list[idx] = item * "!"
  # since we didn't modify the input list, we need to return the new list the function caller.
  retrun loud_list
```

Look what happens when we use the function:

```
my_list = ["Matt", "Beej", "Sean"]
my_new_louder_list = append_exclamations(my_list)
my_list
['Matt', 'Beej', 'Sean']
my_new_louder_list
['Matt!', 'Beej!', 'Sean!']
```

Notice how we had to store the returned list in a new variable. Also notice that it didn't modify the original list we passed in when we called the function.


## Dynamic Array Overview

### Time and Space Complexity

### Lookup

To look up an item by an index is constant time O(1). If you have the specific index of an item in an array, the computations to find that item in memory are all constant time as well.

### Append

Adding an item to an array is constant time in average case. The worst case is O(n) when it comes to inserting.

### Insert

In the worst case, inserting an item is linear time O(n). When you insert into an array, all items - starting at the index we are inserting into - have to be shifted one index. Worst case scenario is inserting at the 0th index as every item has to be shifted.

### Delete

In the worst case, deleting an item is linear time O(n). For any item you delete, all the items after have to be shifted over to fill in the blank spot as arrays need to fill data in sequential order.

### Space

The space complexity of an array is O(n) as each item in the array will take up space in memory.

## Strengths

Again, the dynamic array's is not having to worry about the size of the data structure. It can grow to accommodate your data as needed. And you don't have to manage this growth. The data structure itself grows when necessary. Dynamic arrays also have some of the same strengths as static arrays. They also have efficient lookups when you have a specific index you want to retrieve.

## Weaknesses

the main weakness of a dynamic array is related to its strength. To not worry about a dynamic array's size, when the array runs out of room, it has to grow to accommodate more items. So when your array is set up to accommodate 10 items, if it's full and you try to add an 11th item, the data structure can't just assume that there is a spot available right after the 10th item. It actually creates a bigger array and then copies all of the first items into the new array and then adds the 11th item.

## Follow Along

### Doubling Appends

Underneath the hood of a dynamic array is a static array. When you create a dynamic array, it is a static array that keeps track of the starting index. The index of the last item that it stores, and the index for the last slow in its capacity. This brings up an important point. An array has a size and a capacity. An array's size is how many items it is storing at the moment. Its capacity is how many items it could store before it runs out of room.

So, let's say your dynamic array instantiates with an underlying array with a capacity of 10 and a size of 0 when you create it. Then you add 10 items into the array. Now it has a capacity of 10 and a size of 10. If you now go to append an 11th item, you've run out of capacity. Here is where the dynamic of the dynamic array come into play. The data structure will create a new underlying static array with a capacity twice the size of the original underlying static array. It will then copy the 10 items into the new array and finally add the 11th item. The cost of copying the original items into the new array is O(n). So when we say that, in the worst case, an append on a dynamic array has a time complexity of O(n). This is why. However, all the other appends still have a time complexity of O(1). So, in average case append, the time complexity is still efficient. Also consider that as the array's capacity keeps doubling, the doublings will occur less and less frequently. 
