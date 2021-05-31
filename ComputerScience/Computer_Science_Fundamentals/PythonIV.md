# Python IV

## Overview:

Python does not have static array data type. However, lists are built on dynamic arrays. As you will see, dynamic arrays rely on underlying static array to work. So while you won't be creating and using this data structure directly, it is still essential to understand.

A data structure is a structure that is designed for holding information in a particular way. A static array is a data structure that is designed for storing information sequentially (in order). For example, if you were to store the English alphabet in a static array, you would expect the "B" character to be right next to both the "A" and "C" character. Additionally, every position within the static array is labeled with an index. So if you wanted to access the first item in the static array, you would expect that item to have an index of 0. The second item would have an index of 1 and so on.

## Time and Space Complexity

### Lookup

To look up an item by index in an array is constant time O(1). If you have the specific index of an object in an array, the computations to find that item in memory are all constant time as well.

## Append

Adding an item  to an array is constant time O(1). We always have a reference point to the last thing in a static array, so we can insert an item after the current end.

### Insert

Unless you are inserting an item at the end of the list, items must be shifted over to make room for the new information you add to the static array. It's like if you had a chain of people stretched out, holding hands, in a line. The first person in the line is butted right up against a wall and there is no room on one side of him. If someone wanted to join the end of the line, the people already in line wouldn't have to do anything O(1). However, if you wanted to join the beginning of the line, every single person would have to move over (away from the wall) **O(n)** so that you would have room to join. If you wanted to join the line somewhere in the middle, only the people to your one side would have to shift to make room for you. In the computer, this shifting is moving information from one address in memory to another. Each move takes time.

### Delete

Just like insertions, deletion are only O(1) efficient when they are done at the end of the static array. If something is deleted from any other position in the array, the items have to be moved over, so there isn't an empty space left. Remember, static arrays can be a good data structure because retrieving information from a specific index is fast. It is fast because we can ensure that information is consistently stored in sequence right next to each other. That way, we can always be confident that whatever information is at index 5 is the 6th item in the array. If we left empty spaces in the middle of our static array, we would no longer ensure that this was true.

### Space

The space complexity of an array is linear O(n). Each item in the array will take up space in memory.

## Strengths

Static arrays are great to use when you need a data structure to retrieve information from a specific index efficiently. This is because, as we explained earlier, accessing any specific index in a static array involves a simple mathematical computation (starting index + (size of each item * index)). This computation is done in O(1) time and is not affected by the static array size at all. If you need a data structure where you are likely only to append items (add them to the end of the list), a static array also works great. When you add a new item to the end of the list, nothing has to be shifted over in memory, so that operation is very efficient O(1).

## Weakness

There are situations where static arrays are not the best data structure to use for storing your information. What about if you don't know how much information you need to store? Or if the amount of information you need to store is likely to fluctuate or change frequently. In this case, a static array is not good. The reason is that when you create a static array, you have to know and declare the size of that array. That way, your computer can separate off a chunk of memory that is the exact right size of that array. That way, your computer can separate off a chunk of memory that is the exact right size for storing that static array. If you run out of room in the static array, you can't simply make it bigger; you have to create a brand new, bigger static array. You have to copy each item from the first static array into the newer, bigger one.

Another reason that static arrays are not always the best choice to use for storing information is that they are inefficient unless you are performing operations at the end of the static array. They are inefficient because if you want to insert or delete something at the beginning (or the middle of the list), all the items to the right of that index, must be moved over. If you delete something, everything has to be shifted over, so there isn't an empty index in the middle of your data. If you insert something, all the items have to shift over to make room for the new item before inserting it.

## What about array slicing?

You often encounter a scenario where you want to use a subset of items from an existing array. Array slicing is when you take a subset from an existing array and allocate a new array with just the items from the slice.

In Python, the syntax looks like this:

```
my_list[start_index: end_index]
```

The default start index is 0, and if you leave of the end index, the slice will capture the end of the list.

```
my_list[:]  # This would be all of the items in my_list
my_list[:5] # this would be the items from 0 to 4
my_list[5:] # This would be items from index 5 to the end of the array.
```

You might be wondering, what is the time and space complexity of slicing an array? To understand the complexity, you need to know what is happening behind the scenes when you take a slice of an array. First, you are actually allocating a new list. Second, you copy all of the items in your slice from the original array into the newly allocated list. This means that you have O(n) time cost (for the copying) and an O(n) space cost for the newly allocated list.

You must keep this facts in mind and account for them when using a slice in your code. It's not a free operation.


## Overview

Your computer has something called random access memory (RAM). Sometimes, people say "memory" when referring to RAM.

## Follow Along

One thing that might come to your mind is that there are different types of memory on your computer. What about storing things like videos, text documents, and applications? Are those in "memory"? There is a distinction between "storage" and "memory". Things like videos and files are stored on a disc, not in RAM. RAM is faster than disc storage, but there isn't as much space as possible. Disc storage has more space, but it is slower.

Think of RAM like a set of numbered, sequential mailboxes. Just like a set of mailboxes with numbered addresses, RAM is also sequential and has numbered addresses.

Now, just like you can put something in a mailbox, you can also put something in RAM. Things that you put in RAM, we can call variables. Each "box" in RAM has an address.

Each one of the "boxes" (memory addresses) in our set of mailboxes (RAM) holds 8 bits. Y Ou can think of each bit like a tiny switch that can either be "on" or "off". "On" is represented by a 1, and "off" is represented by a 0.

Bits are often thought about in groups. A group of 8 bits is called a byte. Each "box" in RAM can hold 1 byte (8 bits).

Now, a computer has more than just disc storage and RAM inside of it. There is also  a processor. And, in between the processor and the RAM is something called a memory controller. The memory controller can access each box in RAM directly. It is as if the memory controller had tubes connected to each box of the set of mailboxes. Through those tubes, the memory controller can send and receive information directly to each box in RAM.

Why is the direct connection between the memory controller and each box in RAM meaningful? It's so that the memory controller can jump around to which box it wants to communicate with quickly. Even though the boxes are in sequential order, the memory controller doesn't have to go through the boxes in order. It can access the first one, then jump to one somewhere in the middle, and then access one at the end. Because there is a direct connection, this is done quickly.

Whenever you use a computer, you are very concerned with the speed of the computer you are using. So, computer designers made a way to optimize for speed when accessing items in RAM. Whenever a processor accesses a box in RAM. It also accesses and stores the boxes near it. Often, if you are accessing one thing in RAM, it's likely that the next thing you need to access is nearby. That's why keeping a copy of nearby items in the cache speeds things up.

Whenever the processor  reads something (say, the player's position in an old adventure game) out of RAM, it adds it to the cache to use it again in the future. Then, when it needs something else from RAM, it will go to the cache for it. As you can see, the cache helps the processor by saving execution cycles  required to go out and read something from RAM.

the processor, not RAM, has the actual cache. The memory controller keeps track of what goes into and comes out of the cache.

We can think of several ways. Perhaps, the processor can use the cache as a temporary area to keep a copy of its last actions just in case it needs to reread them.

There is one caveat - it is not as if "everything" goes out to RAM and then gets inserted into cache. In reality, the cache holds only a handful of memory addresses from RAM. Also, note that these few memory addresses in the cache can be accessed faster than other storage locations.

## Overview

Computers use the binary number system, so we will represent all of our variables in the binary number system.

Instead of 10 digits like 1,2,3,4,5,6,7,8,9, and 0, the binary number system only has two possible digits, 1 and 0. Another way to think of it is that computers only have switches (bits) that can be in an "off state" or an "on state"

## Follow Along

Before we try to understand the binary number system, let's review how the decimal system works. Let's look at the number "1001" in decimal.

Even thought there are two "1" digits in this number, they don't represent the same quantity. The leftmost "1" represents one thousand, and the rightmost "1" represents one unit. The "0"s in between represents the tens place and hundreds place.

So this "1001" in base ten represents ' 1 thousand, 0 hundred, 0 tens, and 1 one"

Each successive digits in the base 10 number system is a power of 10. The ones place is 10^0 = 1. The tens place is 10^1 = 10. The hundreds place is 10^2 = 100. This patterns continues on and on.

This patterns hold for other number systems as well. In the binary system, each successive digit represents a different power of 2. The first digit represents 2^0 = 1. The second digit represents 2^1= 2. The third digit 2^2 = 4 and so on.

So, what if the number "100" was in binary and not in decimal? What would it represent then? Well, if we read it right to left, we have a "1" in the ones place, a "0" in the twos place, a "0" in the fours place and a "1" in the eights place. We add this values up to (8 + 0 + 0 + 1) which equals 9.

Below is a table that shows how to  count up to binary and decimal

| Decimal | Binary |
|---------|--------|
| 0       | 0000   |
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |
| 7       | 0111   |
| 8       | 1000   |

## Overview

### In-Place

An in-place function modifies or destroys the state of the input data when it is run. For instance, if you write a function that squares every integer in an input list, an in-place version of this function would change the data in the list that was passed in. It would not create a new list and return the new list. In-place functions are more space-efficient because they don't create new variables directly tied to the input size. However, to get that space-efficiency, you have to risk that the function's user may end up changing state to the input accidentally.

 Imagine a scenario where you have an antique map that you are using to navigate on a hike. You end up needing directions, and when you come across another hiker, you ask them for help. The person helping you has two options. They can take your antique map, use a pen, and mark it up with their notations that will help you navigate however, you most likely didn't want those annotations to be on your map forever. The other option would be to find another piece of paper and have the person helping you write out their annotations on that. This way, your original antique map doesn't have to be modified. However, now you have two maps that you have to carry around on your hike.

### Out-of-Place

 In contract to in-place functions, out of place functions don't modify or destroy the input state when they run. Any changes done to the input are done to a copy of the input, not the original that was passed in. This is why they are less space-efficient. If you have a list of 1,000,000 items that you want to square, you first have to make a copy of that list. Now you have two lists of 1,000,000 items. However, you avoid any side-effects that might be unintended.

## Pass By Reference Value

In Python, some function arguments are passed in by their actual value, and some are passed in as a reference to the object in memory. Primitive values like integers, floats, and strings are passed in by their actual value. So, if you call a function and pass in the integer **2** when you reference that value by the named parameter of the function, you can't change **2** in memory. However, non-primitive objects like lists or dictionaries are passed in as references to that object in memory. So, if you call a function and pass in the dictionary {"name": "Matt"} when you reference that dictionary using the named parameter, you are changing the original object that was passed in. For objects that are passed in by reference, they must be copied to a new variable before they are modified if you want to avoid side effects.

## When should I use an in-place function or algorithm?

It would be best if you always defaulted to using an out-of-place function. This is a safer default to avoid unintended side-effects in your program. However, there are scenarios that you might encounter where you need to be extremely space-efficient. In that case, you might have to use an in-place function to work within the particular space constraints you've been given.

## Follow Along

Here is an example of a function that triples each number in an input list. This function does this in place:

```
def append_exclamations(str_list):
  for idx, item in enumerate(str_list):
    stri_list[idx] += "!"
```


Now, since this is an in-place function, watch what happens when we use it:

```
my_list = ["Matt", "Beej", "Sean"]
append_exclamations(my_list)
my_list
['Matt!', 'Beej!', 'Sean!']
```

my_list was modified when I called the function, and the function only returned the default return value of None.

Let's write a similar function, but this time we will do it out of place:

```
def append_exclamations(str_list):
  # create a new empty list that has the same length as the input list
  loud_list = [None] * len(str_list)
  for idx, item in enumeate(str_list):
    # insert the modified string into the new list
    loud_list[idx] = item + "!"
  # Since we didn't modify the input list, we need to return the new list to
  # the function caller
  return loud_list
```

Look what happens when we use this function:

```
my_list = ["Matt", "Beej", "Sean"]
my_new_louder_list = append_exclamations(my_list)
my_list
['Matt', 'Beej', 'Sean']
my_new_louder_list
['Matt!', 'Beej!', 'Sean!']
```

Notice how we had to store the returned list in a new variable. Also, notice that it didn't modify the list that we passed in when we called the function.

## Overview

Remember how we said that you had to know how much information you were going to store when you created a static array? Well, with a dynamic array, you don't have to know. You don't have to declare a size when you instantiate a dynamic array. That makes it better in scenarios where the amount of information you need to store is unknown or is likely to fluctuate.

## Time and Space Complexity

### Lookup

To look up an item by index is a constant time O(1). If you have a specific index of an item in  an array, the computations to find that item in memory are all constant times.

### Append

Addinga n item to an array is constant time O(1) in average case. However, in the worst case, the cost is O(n) - during insert.

### Insert

In the worst case, inserting an item is linear time O(n). When you insert into an array, all the items - starting at the index we are inserting into - have to be shifted one index. These items have to move over to make room for the new item being inserted. The worst case scenario is inserting at the 0th index and every item in the array has to shift over.

### Delete

In the worst case, deleting an item is linear time. For any item  you delete (unless it's the last item), all of the items after that index have to be shifted over to fill the now blank spot in the array. Remember, arrays store data in sequential order, so if we delete them, we cannot just leave that space blank. If we left the space blank, it would ruin the quick lookup time. To have a fast lookup time, we need to be able to rely on the distance from the start of the array to whatever index we are trying to access.

### Space

The space complexity of an array is linear O(n). Each item in an array will take up space in memory.

## Strengths

Again, probably the dynamic array's biggest strength is not having to know or worry about the size of the data structure. It can grow to accommodate your data as needed. And you don't have to manage this growth; the data structure itself grows when necessary. Dynamic arrays also have some of the same strengths as static array. They also have efficient lookups O(1) when you have a specific index that you want to retrieve from

## Weaknesses

The main weakness of the dynamic array is related to its strength. To not have to worry about or manage the array's size, when the array runs out of room. It has to grow to accommodate more items. So, let's say you have a dynamic array that is current set up to store 10 items. If it's full and you try to add an 11th item, the data structure can't assume that there is spot available right after the 10th item. It actually creates a new and bigger array and then copies all of the first ten items into the new array and finally it adds the 11th item. Additionally, adding and deleting from a dynamic array have the same weakness as static which is a time complexity of O(n)

## Follow Along Doubling Appends

Underneath the hood of a dynamic array is a static array.  When you create a dynamic array, it is a static array that keeps track of the starting index, the index of the last item that it stores, and the index for the last slow in its capacity. This brings up an important point. An array has a size and capacity. An array's size is how many items it is storing at the moment. Its capacity is how many items it could store before it runs out of room.

So, let's say that your dynamic array instantiates with an underlying static array with a capacity of 10 and a size of 0 when you create it. Then you add 10 items to the array. Now it has the capacity of 10 and a size of 10. If you now go to append an 11th item to the array, you've run out of capacity. Here is where the dynamic of the dynamic array comes into play. The data structure will create a new underlying static array with a capacity twice the size of the original underlying static array. It will then copy the ten original items into the new array and finally add the 11th item. The cost of copying the original items into the new array is O(n). So, when we say that, in the worst case, an append on the dynamic array has a time complexity of O(n), this is why. However, all the other appends still have a time complexity of O(1). So, in the average case append, the time complexity is still efficient. Also, consider that as array's capacity keeps doubling, the doublings will occur less and less frequently.

## Overview

We now know that things are stored in RAM using binary and each "box" in RAM holds 1 byte (8 bits). What does that means for what we can store in RAM? Let's say have 1 byte of RAM to use. How many different numbers can we represent using only this 1 byte?

Remember that each digit in a binary number is successive power of 2. If we have 8 bits to use, we can store 2^8 = 256 different numbers in 1 byte.

## Follow Along

Let's see if we can find a pattern:

  * With one bit, we can express two numbers (0 and 1)
  * With two bits, for each of the first number (0 or 1), we can put a 0 or a 1, so we can express 4 numbers.
  * With 3 bits, we can express 8 numbers.

Every time we add a new bit, we double the number of possible numbers we can express in binary. This pattern can be generalized as 2^n and 2^8 = 256.

Often, computers use 4 bytes (32 bits) to represent our variables, meaning we can express as many as 4 billion (2^32) possible values. Similarly, computers may use 8 bytes (64 bits) to represent our variables and can express over 10 billion (2^64).

The 2^X in the binary system is called the bitsize. Eight bytes of memory is called "8-bits" and 16 bytes are called "16-bits", etc.

In theory, you could use less space to represent smaller integers. For instance, in binary, the number one is represented by 1. So technically, to store one in binary, you only need one bit. But computers don't usually do this. Many integers take a fixed amount of space, no matter what number they might have in them. So, even though you only need one bit to represent the number one, the computer would still use 32 or 64 bits to do so.

So, if a variable represents a fixed width integer, it doesn't matter if the value has 6 or 123,456; the amount of space it takes up in RAM is the same.

The computer can store numbers like 3, 6000000, or -14 in 32 bits, one of the "fixed-width integers" we discussed earlier. All of these fixed-width integers take up constant space O(1).

Storing numbers as fixed-width integers introduces a trade-off. We have constant space complexity and because each integer has a constant and expected number of bits, simple mathematical operations only take constant time. The cost of having an integer as fixed width is that there is a limit to the number of integers you can represent.

## Follow Along

So, let's say we wanted to write a program that allowed us to keep trace of the number of hours we spent studying that day. We will round the number of hours to the nearest whole number to store them as fixed width integers. Additionally, each day's hours will be represented by eight bits in binary.

So, we will start at the memory address 0 in RAM, and each day, stores the number of hours we studied in that "box" of RAM. For our first day that we are tracking, we store an 8-bit binary integer in "box" number 0. On the second, we store an 8-bit binary integer in "box" number 1 and so on.

An array is just an ordered sequential collection of data. Well, RAM is already structured like this right? Our days where we track the number of hours that we are studying are in sequential order in RAM.

Knowing this information, what can we do if we want to look up how many hours we studied on day 5 (index 4 because of zero-indexing). Because of all the information is stored in sequential order. , we can do simple math. If you are looking for the day 5 information (index 4), you need to know that the starting item address is 0, and then add 4 (the index). Or, if the starting address was 5, and you were looking for the 10th index, you'd go to memory address 15 (5 + 10)

This math works because we are using one "box" in memory for each day's record. If we were using 64-bit integers that take up 8 boxes in RAM, we would have to slightly adjust our math. In this case, we would have to multiply the index we were looking for by the number of bytes each record was stored in. So, if we were storing 64-bit integers (8 bytes) and wanted to find the item with index 4, and the starting index was 0, we would go to the memory address 0 + (4 * 8) = 32.

Because accessing information from a specific index involves this simple mathematical computation, accessing items in an array is a constant time operation. For the mathematical computations to be consistent and straightforward, arrays have to follow specific rules. Each item in the array has to take up the same number of bytes in RAM. Also, each item has to be stored right next to the previous item in RAM. If there are any gaps or interruptions in the array, then the simple mathematical computation for accessing a particular item no longer works.

## Overview

In this example, we will store some strings. A string is just a bunch of characters or letters. One straightforward way to store a string is an array. So let's see how we can define some mappings to make it easier to store strings in arrays.

## Follow Along

to use our 8-bit slots in memory, we need a way to encode each character in a string in 8-bits. One common character encoding to do this is called "ASCII". Here is how the alphabet is encoded in ASCII:

| Letter    | Encoding       |
|-----------|----------------|
|   A       | 01000001       |
|   B       | 01000010       |
|   C       | 01000011       |
|   D       | 01000100       |
|   E       | 01000101       |
|   F       | 01000110       |
|   G       | 01000111       |
|   H       | 01001000       |
|   I       | 01001001       |
|   J       | 01001010       |
|   K       | 01001011       |
|   L       | 01001100       |
|   M       | 01001101       |
|   N       | 01001110       |
|   O       | 01001111       |
|   P       | 01010000       |
|   Q       | 01010001       |
|   R       | 01010010       |
|   S       | 01010011       |
|   T       | 01010100       |
|   U       | 01010101       |
|   V       | 01010110       |
|   W       | 01010111       |
|   X       | 01011000       |
|   Y       | 01011001       |
|   Z       | 01011010       |

Since we can express character as 8-bit integers, we can express strings as arrays of 8-bit characters.

for example, we could represent "LAMBDA" like so:

```
L -> 01001100
A -> 01000001
M -> 01001101
B -> 01000010
D -> 01000100
A -> 01000001
```

Each character, once it was encoded, could be stored as an 8-bit slot in memory. 
