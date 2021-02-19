# Cascading Stylesheets (CSS)

## Introduction to CSS

- CSS stands for Cascading Style Sheets.
- It is a different language than HTML but it works with HTML.
- It allows us to add style and layout to our web pages.

- Before we can add CSS to our web page, we need to inform the browser that what it is reading is in fact CSS.


There are two ways of including CSS in our HTML5
- We can write our CSS directly between two style tags, this isn't very common but it would look something like this.

```
<style>
  <!-- CSS goes here --->
</style>
```

More often, we will link to an exernal CSS file using the link element. This element will include two attribute: rel and href.

- rel will refer to the type of file we are linking, in this case "stylesheet"
- href will point to the location of the file on your computer, or more simply the file name.

```
<head>
  <link rel="stylesheet" href="./styles.css"/>
</head>
```

## Introduction to CSS selectors

- Styling rules will need to adhere to a certain syntax in our CSS so that the browser knows how to properly lead them.

ie:

```
body {
  background = blue;
}
```

```
div {
  styling_property: value of rule;
}
```

Ids: are titles that can only appear on a single element.
Classes: on the other hand can apply to multiple elements.

Class selectors will always being with ".", and Id selectors will always begin with "#".

Styling rules:

- background or background-color: Background can be set to a variety of rules. Most common setting the bakground to a color or an image. Both are displayed. If you want to be more explicit, use the property background-color to only set the color of the background.

```
h1{
  background: red;
}
body {
  background: url('http://imageurl.com/image.jpg');
}

```

- color: it's used for text only. It will change the color of text.
- font-size: We can't use width or height for text, but we can determine the size of the font used. Some units are (px, em).
