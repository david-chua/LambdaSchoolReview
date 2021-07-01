# What is the difference between const, let, and var?

const - immutable to a degree ( you can edit object and arrays) but you can't change pointers. block scoped
let -  mutable, can change pointers, but it's scope to the block.
var - same but var hoisted to the top. If you try to access it, it throws undefined unlike let/const which would throw referenceError.

# Explain Prototypical Inheritance?

an object contains a baseline object that it inherits from.

If you create a new object from that, you inherit that object and you can choose to keep it or change it.

# What does 'this' mean in JavaScript?

It's the global context of everything that is available to you.

# What is the data structure of the DOM?

Tree

What is a stack? What is a Queue? How would you create those data structures in JavaScript?

stack - LIFO
queue - FIFO

Array - pop and shift

# How can you tell if an image element is loaded on the page?

onload elements

# What are call() and apply()?

Ways of changing scope of the calling function.

# What is event delegation?

A way of handling many similar elements. It simplifies initialization and saves memory. Less code. Cons are that the event must be bubbling and it can add CPU load.

# What is a worker? When would you use one?

Workers is something you would use in a browser to offload computationally expensive work. Three different thread so you don't block the UI.
