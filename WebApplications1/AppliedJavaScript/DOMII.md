# DOM II

We use JavaScript to make our pages dynamic and usable. Now that we can access and manipulate elements on our page, you might be wondering why don't we just change the elements in HTML file directly? why do we have to go through all of this just to change some styling on an element?

JavaScript's power lies in its ability to make webpages interactive. In addition to manipulating elements, JavaScript also allows us to add features and make modifications to our site by directly reaching to user interactions. Think about button clicks, drag and drop, zoom, or any number of user interactions.

Every user interaction with a site is an event: a click, moving the mouse, scrolling the page, pressing a key on the keyboard. These are all events on the page, and browser detects all of them.

## .addEventListener

Once we have an element selected, we can use the '.addEventListener' method on that element. It takes two arguments, the first the event to listen for, and the second, the callback to fire when the event is triggered.


## Events

We learned before that there are different types of events we can listen for. The most common are the mouse events highlighted by the 'click' event, but there are dozens of more events we can listen for. We can add event listeners for as many as there are for each element, meaning we can listen for a mouseclick, keypress, hover, and more all on the same element.

## The callback and the Event Object

The callback (also known as an event handler) will take a single argument; this is known as the Event Object. This is JavaScript Object and contains all we need to know about the event and the element it happened on

* eg: **element.addEventListener('click', (event) => {//Handle Event});**
* One of the most important properties of the event object is .target, this property will give us all of the info about the DOM node where the event happened. It has many of the same properties as a regular DOM node, .children, .parent, .style, innerText, etc.
* We can use this to manipulate the target in any way we want, for example, to change the bckground color we would write the following: **event.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });**
*Depending on the type of event listened for, we can have access to other information about the event as well, such as the key pressed and other things.

#### Overview

When we look at the DOM tree we can see those child elements are nested inside parent elements, like a pyramid. And like a pyramid, if you stand (trigger an event) on a child element, you are also triggering that same event on every parent element all the way up to the body. This process is called event propagation. If you have an event of the same type of a parent element and a child element, and you trigger that event on the child element, it will also trigger on the parent. We have to be careful  not to create unwanted interactions because of this.

In our event handler, we are passed the event object. The event object has lots of methods and properties on it including one called .stopPropagation() if we call this method in our event handler, it will effectively stop are event from bubbling any further up the chain

eg: **const eventHandler = (event) => { event.stopPropagation() };**

## .preventDefault

Some elements have a native default reaction to certain events. For example, form elements will refresh the page on submit. **.preventDefault** is a method on the event object and it will stop HTML element from reacting in its default way. **.preventDefault** will be used less than .stopPropagation, but it is important to know about as well. 
