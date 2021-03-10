# DOM 1

The Document Object Model is an object representation of the HTML elements of a webpage. It gives us an interface in which we interact and manipulate the page, change document structure, content, and styling.

It is a tree structure with each DOM element being represented as a tree node.

when a web page is loaded into a browser, the browser first looks for the HTML file. The browser then uses the HTML as a blue print or instructions on how to build the web page.

the DOM is build as a data structure known as a 'tree' because parent elements have nested children elements for leaves. Each branch of our DOM tree can be its own tree.

When the DOM is built and the webpage is loaded, developers get access to it in the form of the global JavaScript object document.document which contains the entire hierarchy of the page. Each element for DOM node. It also contains dozen of built in methods and properties that we can use to manipulate the screen.

## DOM selectors

To manipulate elements on the DOM, we need to select them. There are many ways of doing this such as selecting the body, the head (document.body || document.head). But we want to go deeper, we'll need to use other methods.

## **getElement** Methods

These are the original methods for selecting elements from the DOM.

```
document.getelementsByTagName('p');
```

This method will take a single string as an argument containing the element name of the elements you want to select. It will return an array-like object called an HTMLCollection containing the elements that contain the element name supplied.

```
document.getElementById('IdName');
```

this method will take a single string as an argument containing the Id of the element, search through the DOM, and return the matching element.

```
document.getelementsByClassname('className');
```

This method will take a single string as an argument containing the class of the elements you want to select. It will return an array-like object containing all the elements that hold the given class.

## **querySelector** Methods

These are the newest element selection methods added to the DOM. The methods allows us to select element(s) based on CSS style selectors. Each method takes a string containing the selectors and returns the element(s).

```
document.querySelector('.custom-style');
```

This method will search for and return the first element that matches the value passed into the method. Remember from above that the bggest change from the older DOM selection methods is that we now need to pas the proper CSS selector into the argument.

This means that proper spelling, identification and casing is important as ('custom-style') is different from ('.custom-style')

```
document.querySelectorAll('queryString');
```

This method will search for and return ALL elements matching the query string. This returns an array-like object.

the difference between HTMLCollection, NodeList, and Array:

When we use getelementsByClassname() or querySelectorAll() we get back either an HTMLCollection or a NodeList. We consider it array like as they both have numerical zero based indices and length property but that is all they share with an Array. NodeList does it one step further and has access to .forEach. There are no .reduce or .map or any other array method.

**Pro Tip** the Array class contains a method we can use to create an array from an array like object  called **.from()**. to use this, we would give the .from the array-like object as its only argument

```
Array.from(arrayLikeObject);
```

#### Overview

Now that we have access to the element(s), we can start manipulating them and change their characteristics from the original HTML.

After we have captured our element, we can use that instance of the elements we selected to access and assign values to properties natively contained on it.


**.textContent**

* Gets and sets the text of an element. Essentially whatever text is between the open and closing tags of an HTML element.
* Can use the assignment perator (=) to reset the text of an element
* Setting this property on a node removes all of its children and replaces them with a new single text node.
* [//] <div> something here </div> 
* element.textContent = 'Something New';
