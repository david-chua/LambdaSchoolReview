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
