# Python 1

## Overview

Many times you are working through the computer science curriculum, and when you are on the job, you will find yourself faced with large, challenging problems. There are strategies we can use to break these problems down into more manageable pieces.

"The single most important skill for a computer scientist is problem solving. Problem-solving means the ability to formulate problems, think creatively about solutions, and express a solution clearly and accurately. As it turns out, the process of learning to program is an excellent opportunity to practice problem solving skills".
- Allen B Downey.

Every problem, large or small, can be broken into smaller chunks. Logically, if you take a seemingly unsolvable problem and break it into smaller, more manageable chunks, once you've finished solving each piece of the problem, you'll have conquered the whole thing.

Through the Computer Science curriculum, we will reference and draw from the Lambda Problem Solving Framework, sometimes referred to as **UPER**. This framework is a step-by-step process:

1. **U**understand
2. **P**lan
3. **E**xecute
4. **R**eflect

Almost all problems are a series of sub-problems. You will use the steps of **U.P.E.R** on the primary outer problem and the inner, individual sub-problems.

## 1. Understand

Before doing anything else, make sure you understand precisely what the problem is asking. A helpful starting point could be transcribing the technical description of the problem into your own words.

### Questions

Here is a list of starting questions that might come up during this step:

* What are the inputs your code receives?
  * What is the range of the input?
  * How big can the input be (how much data)?

* What are the outputs your code produce?
  * What is the range of the output?
  * How big can the output be (how much data)?

* How performant must the code be?
* Is there anything missing from the task description that needs to be clarified?
* What assumptions are you making?
  * Does anyone else on the team need to validate these assumptions?

### Actions

The most important thing you can do during this stage of the process is to **ask questions**. Be as specific as you can when you ask questions. Be clear and concise with your questions by using unambiguous language and only including necessary details.

Don't be afraid of this part of the process - enjoy it. Look at the problem with curiosity to be explored, not just something there to torment you. Feeling frustrated and afraid won't help you at work or in an interview. Remember, problem-solving is part of the fun, so enjoy it.

One approach is to identify the smaller components that make up the larger problem. If you get stuck in understanding, break the larger problem into smaller sub-problems. Then, apply this framework against each other of the smaller sub-problems until you solve the larger problem.

Try to digest the problem and comprehend it by rewriting the problem in your own words. If you had to describe it to someone else, how would you do it?

Diagram how the data flows through the problem. Think about each stage of the journey for the data. What will happen to it as it travels from one step to another?

Think like a villain. What inputs would break your program?

Where is the description of the problem incomplete? If you cannot get answers on something that the specifications leave unclear, make an educated guess, and document your assumptions and decision.

You are done with this step when you can explain this problem to someone who has never seen it. Your explanation should be thorough enough for this person to skip the "Understand" step and start planning right away.

## 2. Plan

This step is where you will ask, "what steps will I take to solve the problem?" You will take your description of the problem and transform it into a complete, actionable plan to solve that problem. If you realize you still don't truly understand the problem while planning, return to **Understand** until you resolve the ambiguity. If you have not yet completed **Understand**, you will end up planning to solve the wrong problem! When interviewing, you must do this step aloud.

Remember, you aren't coding during this step unless it's a small piece of throwaway code to test a hypothesis. It would be best if you wrote pseudocode during this step, however.

### Questions:

* Do you know the answer to a similar problem that has comparable inputs and outputs?
  * Does this problem remind you of anything else?
  * Can you bring that knowledge to bear here?

* Does my plan meet the performance requirements?
  * What's the time complexity?
  * What's the space complexity?
  * How big can my input be?

* Can sorting the input data ahead of time lead to any improvements in time complexity?
  * Does recursion help?
  * Is the problem made up of identical subproblems?
  * Can you state the problem with itself in its definition?

* Think like a villain. Does your plan cover the edge cases?

### Actions

Solve the problem like a human. If you're sorting something, imagine your task as a pile of blocks that you need to sort by hand. Break down the steps you take into small enough pieces for the computer to understand. Approach the problem from many angles.

Get a brute force solution as quickly as possible. Even if it's not performant enough. It can lead you to better solutions.

Come up with as many plans of attacks as you can. Choose the best one that satisfies performance needs.

Try to solve a simpler version of the problem. If the input is a 2D array, can you solve it for 1D array? If you need to count the number of ways to eat cookies 1,2, or 3 at a time. first try to solve it the number of ways you could eat two at a time, or even one at a time. The solution to the more straightforward problem can lead to insights on the more complex problem.

List the nouns and verbs in the problem description. Map each one to an algorithm, process, data structure, object, method, function, etc.

"Perfect" can be the enemy of "good". Even if your initial workable solution isn't performant enough, you can iterate later. "Premature optimization is the root of all evil."

You know you completed this step when you have pseudocode that's detail enough to convert to real code. It would be best if you also were convinced the pseudocode represents a legitimate working solution.

## 3. Execute

This step is where you take your plan and convert it to actual working code. This step isn't easy, but it's much easier if you've done an excellent job with the "Understand" and "Plan" steps above. If you find shortcomings in  your plan while implementing the solution, return to the "Plan" phase until you solve the ambiguity. If you have not yet completed the "Plan" step, you will spend far longer on the "Execute" step than you have to.

### Questions

* Think like a villain. Does your implementation handle all inputs?
* What is the best way to split this code into separate functions or classes?
* Does this functionality already exists?
  * Are there built-in libraries I can leverage?
  * Are there third-party libraries I can leverage?

### Actions

Convert your pseudocode and outlines into actual code. Don't Repeat yourself (DRY). Remove redundant code as you write it.

Document code as you write it. Header block should contain information on how someone should code. Comment only when necessary; where possible, write code clearly enough that comments aren't needed. If comments help clarify or summarize a piece of code to a reader, definitely add comments.

If you write code that's hackish or kludgy, fix it. If you don't have time to fix it, comment it, explain why you couldn't do it the right way (time constraints, etc), and what you need to do to make it right.

You know this step is complete when your solution works on good data, it doesn't fall on flawed data or edge cases, and the program passes all of the tests.

## 4. Reflect

The primary question you are dealing with during this step is - "Is the implementation as good as I can make it?" Would I be proud to show my code to another programmer?

### Questions

* Does you resolution work in all cases?
  * Main case?
  * Edge cases?

* Is the solution performant enough?
* Is the code documented?
* In retrospect, what would you do differently? What will you di differently next time?
  * What went right?
  * What went wrong?

### Actions

Adding documentation is necessary action during this step. It would be best if you documented any future changes you plan on making. You should document any code sections that you will need to make more performant if the data increases.

Another critical action to take during this step is to remove any redundant or unnecessary code. Also, depending on time constraints, it's likely that you might have some hackish code that you'd like to improve in the future when time allows. Make sure to document any ideas or plans on how you might do so.

You know that this step is complete when your code is adequately refactored and exhaustively documented.

## Follow Along:

Let's use the **dining philosophers problem** as an example problem to use our Problem Solving Framework on. Here's a short description of the problem.

Five silent philosophers sit at a round table with bowls of noodles. One chopstick is placed between each pair of adjacent philosophers.

Each philosopher must alternately think and eat. However, a philosopher can only eat noodles when they have both left and right chopsticks. Each chopstick can be held by one philosopher and so a philosopher can use the chopstick only if it is not being used by another philosopher. After an individual philosopher finish eating, they need to put down both chopsticks so that the chopsticks become available to others. A philosopher can take the chopstick on their right or the one on their left as they become available, but cannot start eating before getting both chopsticks.

Eating is not limited by the remaining amounts of noodles or stomach space; an infinite supply and infinite demand are assumed.

The problem is how to design a discipline of behavior (a concurrent algorithm) such that no philosopher will start; i.e. each can forever continue to alternate between eating and thinking, assuming that no philosopher can know when others may want to think or eat.

### 1. Understand

On the surface, this seems like a straightforward problem - however, some approaches will lead to problematic results.

Here are some critical pieces of information from the question we should highlight.

* There are 5 philosophers
* There are 2 states (eating, thinking)
* there is precisely 1 chopstick in between each pair of philosopher(5 total)
* BOTH chopsticks are required to transition from thinking or eating

Some essential questions to ask here include "When should philosophers pick up a chopstick?" and "When should philosopher put down a chopstick?"

Remember that you want to establish if there are any restrictions or limitations you need to consider before you work on a solutions.

### 2. Plan

Let's create a solution written as a set of rules that define how philosophers should interact with chopsticks in a manner that will allow them to transition between eating and thinking.

1. Philosopher is eating (2 chopsticks)
2. Philosopher finishes eating and sets down chopsticks
3. Philosopher is thinking (0 chopsticks)
4. Philosopher sees his/her neighbor set down chopsticks & picks them up.
5. Repeat steps 1-4

### 3. Execute

We could break down the general plan above into a few specific results

* eat for a set amount of time once they are holding both chopsticks
* put down the right chopstick
* put down the left chopstick
* pick up the left chopstick as soon as it becomes available
* pick up the right chopstick as soon as it becomes available
* repeat

However, this solution will not alwyas work.

### 4. Reflect

The above solution has the potential to create a situation known in Computer Science as **deadlock**. A deadlock means that two processes are stuck in an eternal state of waiting. If neither has two chopsticks, they cannot eat. But they also won't put down chopsticks they are holding (because they haven't eaten yet). We need to revise the rules about when the philosophers should pick up/ put down chopsticks to eliminate this possibility.

## Overview

The necessary action when asking a question is to imagine that you are trying to answer your question. Because you are deep in your problem's weeds, it's easy to forget that the person who answers your question does not have all the context. We should keep this general rule in mind - it's the overarching rule for all the details we go into next.

## Search and Research

Before you do anything else, search for a solution to your problem on your own. One thing you should start doing is keeping track of all your research when solving a problem. One easy way to solve this is to have a browser window represent a specific search for a solution, and each open tab represents an attempt at solving it. Keeping track of your research is helpful to provide examples of similar questions or similar problems and explain why those didn't answer your specific problem or question. It also helps the person answering your question avoiding pointing you toward resources you've already explored and lets them know that you've already put in the work.

## Introduce the Problem

The thing you do when you ask a question is to introduce the problem. The first paragraph of your written question should server as an executive summary of the problem. All the following paragraphs should fill in the details of the problem.

An important thing to include in your problem introduction is a precise explanation of how you encountered the problem. Write about the difficulties that kept you from solving it. Describe what you already tried and include the results of the research you've done.

You should provide as much detail about the context as possible. For instance, include the language version, the platform, the operating system, the database type, specific IDE, and any web server information. You should also include your particular constraints. For example, you may not be allowed to use feature A or B that would provide an obvious solution. If you have an odd constraint, it may also help explain why you have that constraint.

## Help Others Reproduce the Problem

One thing to remember is that not all questions benefit from including code. However, if you include code, definitely do not just copy in your entire program. By having irrelevant details, you make your question much harder to answer and decrease the chances of someone helping you.

Here are some guidelines for when to include code in your question.

### Minimal

Include just enough code to allow others to reproduce your specific problem. One way to do this is to restart from scratch. Do not include snippets of your entire program. Instead, create a new program, but only add what's necessary to recreate the problem.

If you aren't exactly sure where the problem code is, one way to find it is by removing chunks at a time until the problem disappears -- then add back the last part. This way, you can deduce that the last piece of code you added back is likely the source of your problem.

Be careful not to remove too much code either. Keep your question brief but maintain enough context for clarity.

### Complete

Make sure you include the portions of the code needed to reproduce the problem. It would be best if you assumed that the person who is answering your question would not write any code to reproduce the issue. Again, remember, do not use images of code - those trying to help you need direct access to the code you include in your question.

### Reproducible

When you include your code, it's also important to tell the reader exactly what you expect the behavior to be. Be sure to show the reader the exact wording of the error message you encountered (if there was one). It's also crucial to double-check that your included example reproduces the problem.

One thing you can do is create a live example on a site like sqlfiddle.com or jsbin.com. If you do, make sure you also include a copy of your code in your question. Not everyone will utilize the link to the live example.

And to reiterate, do not post images of any code, data, or error messages - reserve images for things like rendering bugs - things that are impossible to describe accurately with just text

### Proofread

Don't send a question you haven't proofread. When you post your question, you should have already read and reread it. Taking care to follow all the best practices and making sure your question makes sense. It would be best if you imagined that you're coming to your question fresh, with no other context but the question itself. You want to make your question as easy for someone to answer as possible. Remember, the reader is likely choosing between several questions they could answer. You want your question to stand out as something concise and approachable. Don't forget to double-check your spelling, grammar, and formatting. Keep it as straightforward as you can.

### Respond to Feedback

As feedback and responses to your question begin coming in, respond as quickly as possible. You'll likely receive clarifying questions and your readers need that clarification to help you.

## Follow Along - Using **print** with different objects

Let's start by executing the print function to print different types of objects in Python. There are numerous types of objects that you can print using the **print** function.

Using **print** with no arguments

```
>>> print()

>>>
```

Notice the empty line after calling the **print** function. The default end value when calling print is the newline character **'\n'**.

Using **print** with a string literal:

```
>>> print("Lambda School is Awesome!")
Lambda School is Awesome!
>>>
```

Notice how calling print with the string literal printed the exact string we passed in onto the screen.

Using **print** with a variable:

```
>>> slogan = "i love lamp"
>>> print(slogan)
i love lamp
>>>
```

Notice how calling print with the slogan variable prints the value assigned to the slogan variable.

Using print with an expression:

```
>>> superlative = "wonderful";
>>> school = "Lambda School"
>>> print(school + " is " + superlative)
Lambda School is wonderful
>>>
```

NOtice how the argument for the print function can be an expression. Once the expression is resolved to a string object, the print function can output it to the screen.

Using print with other object types:

```
print(2020)
2020
print(123.456)
123.456
print(False)
False
print(["Lambda", "School", 2,0,2,0])
["Lambda", "School", 2,0,2,0]
print(("Lambda", "School"))
('Lambda', 'School')
print({"school": "Lambda School", "year": 2020})
{'school': 'Lambda School', 'year': 2020}
```

Any object passed as an argument into print will get converted to string type before outputted to the screen

You can see how the print function is easy to use and how it can handle any object type that you pass into it.

## Passing multiple arguments into print

Now, let's look at how we can pass multiple arguments into the **print** function. Using **print** with multiple arguments gives you flexible and easy way to output items to the screen.

We can pass multiple objects, all of the same or different types into print.

```
>>>print("Lambda School", 2020, True)
Lambda School 2020 True
>>>
```

Notice how each object we passed in was converted to a string and then output to the screen. Notice also that print used " " as the default separator value.

We can change the separator value by assigning a value to the keyword argument **sep**

```
>>> print("Lambda School", 2020, True, sep="!!!")
Lambda School!!!2020!!!True
>>> print("Lambda School", 2020, True, sep="\t")
Lambda School    2020    True
>>> print("Lambda School", 2020, True, sep="\n")
Lambda School
2020
True
>>> print("Lambda School", 2020, True, sep="")
Lambda School2020True
>>>
```

## Specifying the **end** value with **print**

You can also specify the **end** value by assigning a value to the **end** keyword argument when you call print function. Being able to print a value to the screen but allow the user to stay on the same line is useful and necessary in some cases.

Here is how you can change the default end value (which is \ n) when calling the print function

```
>> print("Are you a Lambda School student?", end=" (Y or N)")
Are you a Lambda School Student? (Y or N)>>>
```

Customizing the end value when calling the print function can be useful and necessary in some circumstances.

You have now learned the basics of using the print function in Python. You learned how to call the print function to print objects of different types. You now know how to use print with multiple positional arguments in certain necessary situations, you also know how to change the default end value when calling the print function.

## Overview
Python is unique because indentation instead of some other character marks blocks of code. A block of code is a collection of statements that are grouped. The syntax for denoting blocks varies from language to language. For example, in C, blocks are delimited by curly braces(**{** and **}**). Understanding how Python uses whitespaces and indentation to denote logical lines and code blocks is essential.

## Follow Along

### Whitespace Characters

Whitespace is any character represented by something that appears empty (usually \t or " "). The characters of Python considers to be whitespace can be seen printing out the value of **string.whitespace** from the string library.

```
>>> import string
>>> string.whitespace
' \t\n\n\x0b\x0c'
>>>
```

Notice the characters are " " (space), \t (tab), \n (newline), \
