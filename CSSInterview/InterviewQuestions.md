## What is the box model of CSS? Which properties are part of it?

A rectangle box is wrapped around every HTML element. The box model is used to determine the height and width of the rectangular box. The CSS box consists of width and height, padding, border, margin.

Parts of the box model:
1. Content (the width and height)
2. Padding: Area around the content (space between border and content)
3. Border: Area surrounding the Padding
4. Margin: Area surrounding the border.

## What is the advantage of using CSS?

* Separation of content from presentation - CSS provided a way to present the same content in multiple presentation formats in mobile, desktop or laptop.
* Easy to maintain - CSS built effectively can help change the look and feel of an app by making small changes. Changing styles can be easy it's done properly.
* Bandwidth - Used effectively, stylesheets will be stored in the browser cache and can be used on multiple pages without having to be downloaded again.

## What are the limitation of CSS?

* Browser compatibility - Some browsers do not support certain style selectors
* Cross Browser issue - Some selectors behave differently between different browsers.
* There is no parent selector.

## How to include CSS in a webpage?
There are 3 different ways to include CSS

1. External style sheet: An external file linked in the HTML document using a link tag.

```
<link rel="stylesheet" type="text/css" href="mystyles.css"/>
```

2. Embedded CSS with a style tag included in the HTML

```
<style type="text/css">

/** Add styles here **/

</style>
```

3. Inline styles: Adding CSS in the HTML element directly using a style tag.

```
<h2 style="color:red; backgroudn:black;">Inline Styles</h2>
```

## What are different type sof selectors in CSS?

* Universal - *
* Element - h1, ul, h2, etc - matches element name.
* ID selector - matches ID attribute of HTML using #
* Class selector - matches class attribute of HTML element uses .
* Descendant Combinator - combines multiple selectors from parent to child
```
Descendant Combinator:

#container .box{
  float: left;
  padding-bottom: 15px;
}

<div id="container">
  <div class="box"></div>
  <div class="box-2"></div>
</div>
<div class="box"></div>
```

* Child Combinator: A selector that uses the child combinator. Similar to descendant but only targets child elements

```
#container >.box{
  float: left;
  padding-bottom: 15px;
}

<div id="container">
  <div class="box"></div>

  <div>
    <div class="box"></div>
  </div>
</div>
```

The selector will match all elements that have a class of box and that are immediate children of #container. That means, unlike descendant combinator, there can't be another element wrapping .box. It has to be a direct child element.

* General Sibling Combinator - A selector that uses general sibling combinator to match elements based on sibling relationships. The selected elemnts are besides each other in the HTML.

```
h2 ~ p {
  margin-bottom: 20px;
}

<h2>Title</h2>
<p> Paragraph Example.</p>
<p> Paragraph Example.</p>
<p> Paragraph Example.</p>
<div class="box">
  <p> Paragraph Example.</p>
</div>
```

In this example, all paragraph elements (<p>) will be styled with the specific rules, but only if they are siblings of h2 elements. There could be other elements in between <h2> and <p> and the styles would still apply.

* Adjacent Sibling Combinator - A selector that uses adjacent sibling combinator uses the plus symbol (+) and is almost the same as general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.

```
p + p {
  text-indent; 1.5em;
  margin-bottom: 0;
}

<h2>Title</h2>
<p> Paragraph Example.</p>
<p> Paragraph Example.</p>
<p> Paragraph Example.</p>
<div class="box">
  <p> Paragraph Example.</p>
  <p> Paragraph Example.</p>
</div>
```

The above example will apply the specified styles only to paragraph elements that immediately follow other paragraph elements. This means that the first paragraph element would not receive this styles. Also, if another element appeared between two paragraphs, the second paragraph of the two wouldn't have the styles applied.

* Attribute Selector - The attribute selector targets elements based on the presence and/or value of HTML attributes and is declared using square brackets.

```
input [type="text"] {
  background-clor: #444;
  width: 200px;
}

<input type="text">
```
