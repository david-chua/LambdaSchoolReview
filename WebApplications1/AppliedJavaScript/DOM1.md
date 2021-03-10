# DOM 1

The Document Object Model is an object representation of the HTML elements of a webpage. It gives us an interface in which we interact and manipulate the page, change document structure, content, and styling.

It is a tree structure with each DOM element being represented as a tree node.

when a web page is loaded into a browser, the browser first looks for the HTML file. The browser then uses the HTML as a blue print or instructions on how to build the web page.

the DOM is build as a data structure known as a 'tree' because parent elements have nested children elements for leaves. Each branch of our DOM tree can be its own tree.

When the DOM is built and the webpage is loaded, developers get access to it in the form of the global JavaScript object document.document which contains the entire hierarchy of the page. Each element for DOM node. It also contains dozen of built in methods and properties that we can use to manipulate the screen.

## DOM selectors

To manipulate elements on the DOM, we need to select them. There are many ways of doing this such as selecting the body, the head (document.body || document.head). But we want to go deeper, we'll need to use other methods.

**getElement** Methods
