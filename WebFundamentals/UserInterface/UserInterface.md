## What is HTML?

- HTML is one of the languages used for web development. It is a "markup language" as opposed to "programming languages" like JavaScript, Java, Python, etc.
- It is specifically designed to display data in a graphical form rather than to execute tasks.
- HTML was created as a language when the first visual web browsers came into existence in the early 90's. It is read by browser and then used as a blueprint for displaying information on your screen.


## What is a markup language?

- Every webpage is essentially just plain text.
- Due to HTML, we are able to create different elements that is able to generate different types of content to be contained in different boxes depending on their importance.
- We use certain elements for headers, other elements for images, and others for texts.

## What are tags?

- Tags are what defines an HTML elements.
- Some tags provide a clue to the importance of the element. H1 is more important than H6, thus the size difference.

#### Tags examples:

```<p> ```

   * The paragraph element is meant for holding text. By default, it will render text on a new line.

```<div> ```
  * The div element is a generic container. It is used primarily for grouping other HTML elements together. It is invisible by default by can be used to position or style a group of elements.
  * div by itself is not super useful but will become a powerful tag when we start to stack HTML with JavaScript and CSS.
  * By default, a div is a block level element, meaning it will take up its own, full line.

```span```

  * span element is a generic text container. It does not create a new line like the p element does. It's typically used for styling words or phrases within a larger body of text.
  * Unline divs, span operates inline and does not take up its own line.

``` <h1> --> <h6>

  * The heading tags are intended to be a way to present the subject matter of the page. 1 being the most important and 6 being the least.
  * Avoid using heading tags to resize text. Headings use size to indicate their relative importance, but CSS is preferred for general purpose resizing.
  * Semantically, you should only use one h1 per page. Using more than one will not result in an error but is not considered best practice.
