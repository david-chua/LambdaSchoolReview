/**
Validate Subsequence

Given two non-empty array of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but are in the same order as they appear in the array.

For instance, the numbers [1,3,4] form a subsequence from the array [1,2,3,4].
So does [2,4]. Note that a single number in an array and the array itself are both valid subsequence of the array.


To solve this, we want to keep track of two pointers.
1. Main array
2. Sequence array.

We move along the main array until we find the value of the subarray in the subarray's pointer. We continue to do so until we go through the entire main array or we complete the sequence in the array. This is because finishing the main array, there's no remaining values to check. Finishing the sequence array, there's nothing left to compare.

How to solve
[5,1,22,25,6,-1,8,10]
 _  <-- mainArrayIndex (starts at 0 )
[1,6,-1,10]
_  <-- sequenceArrayIndex (starts at 0)


We then compare:
5 and 1. This are not the same, so we continue to the next value in the main array:

[5,1,22,25,6,-1,8,10]
   _  <-- mainArrayIndex (index value = 1)
[1,6,-1,10]
_  <-- sequenceArrayIndex (index value still at 0)

We compare the two values and they are the same.
We then increase both mainArrayIndex and sequenceArrayIndex to continue looking for the next value that matches the value in sequence array.

[5,1,22,25,6,-1,8,10]
     _  <-- mainArrayIndex (index value = 2 )
[1,6,-1,10]
   _  <-- sequenceArrayIndex (index value = 1)

22 does not equal to one.

[5,1,22,25,6,-1,8,10]
         _  <-- mainArrayIndex (index value = 3)
[1,6,-1,10]
   _  <-- sequenceArrayIndex (index value = 1)

25 does not equal 6

[5,1,22,25,6,-1,8,10]
           _  <-- mainArrayIndex (index value = 4 )
[1,6,-1,10]
   _  <-- sequenceArrayIndex (index value = 1)

6 == 6. We move both indexes and keep going through

[5,1,22,25,6,-1,8,10]
              _  <-- mainArrayIndex (index value = 5 )
[1,6,-1,10]
      _  <-- sequenceArrayIndex (index value = 2)

-1 == -1, again we continue to move forward.

[5,1,22,25,6,-1,8,10]
                _  <-- mainArrayIndex (index value = 6 )
[1,6,-1,10]
        _  <-- sequenceArrayIndex (index value = 3)

10 is not equal to 8, so we move the mainArrayIndex

[5,1,22,25,6,-1,8,10]
                  _  <-- mainArrayIndex (index value = 7 )
[1,6,-1,10]
         _  <-- sequenceArrayIndex (index value = 3)

10 == 10, so we move both indexes

[5,1,22,25,6,-1,8,10]
                     _  <-- mainArrayIndex (index value = 8 )
[1,6,-1,10]
            _  <-- sequenceArrayIndex (index value = 4)

At this point, since we reach the end, we exit the loop.
**/


// While loop soluiton

function isValidSequenceWhileLoop(array, sequence){
  let mainIndex = 0;
  let sequenceIndex = 0;

  while(mainIndex < array.length && sequenceIndex < sequence.length){
    if (array[mainIndex] == sequence[sequenceIndex]){
      sequenceIndex++
    }
    mainIndex++
  }
  return sequenceIndex === sequence.length
}

let testArray = [5,1,22,25,6,-1,8,10]
let seqArray = [1,6,-1,10]


console.log(isValidSequenceWhileLoop(testArray, seqArray))

// For loop solution

function isValidSequenceForLoop(array, sequence){
  let sequenceIndex = 0;

  for (let i = 0; i < array.length; i++){
    if (sequence[sequenceIndex] === array[i]){
      sequenceIndex++
    }
  }
  return sequenceIndex === sequence.length
}

console.log(isValidSequenceForLoop(testArray, seqArray))
