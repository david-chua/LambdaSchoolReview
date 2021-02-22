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


## Box Model

The box model places all html elements into boxes.
The make up of each box is the following:
- content (text, or image)
- padding (black space around the content)
- border
- margin (blank space around the border)

We use CSS to add styles in our box model.
By default, most HTML elements are boxes, however there are some, including span, a, button, and others that don't follow this rules.


### Height and width:

- We can tell the browser how exactly wide and tall we want our element to be.
- This is used in divs, imgs, and other height based elements.
- Size value can be measured in pixel("px") and relative percent of screen (%).

```
div {
  height: 400px;
  width: 400px;
}j

div {
  height: 100%;
  width: auto;
}
```

### margin

- The margin is an invisible area that surrounds your content, padding, and border. This is the outermost area in the box Model

### border

- Border will set a border around your element.
- You can determine the size, color, and style of the border.
- It will be set up in this order:
  - width
  - style
  - color

```
div{
  border: 1px solid black;
}
```

### padding

- The padding is the transparent area between the border and the content.


## CSS Inheritance

CSS stands for cascading style sheets.

To understand CSS, we need to understand where the "C" comes from. The word "cascade" suggests a pattern of inheritance that we can use in our code. Child inherits characteristics and personality from the parents.

CSS inheritance is similar to human inheritance in that you can pass traits down to ancestor elements.

In CSS, every ancestor of the original parent gains access to all the CSS properties through inheritance.

Inheritance occur in the HTML structure. In HTML, when an element is placed inside another element, it is said to be nested within its parent element.


HTML structure:

```
<div class="parent">
  <p>Parent</p>
  <div class="child">
    <p>Child</p>
    <div class="grandchild">
      <p>Grandchild</p>
    </div>
  </div>
</div>
```

CSS:

```
.parent{
  color: red;
}
```

Notice that by styling the .parent class, all of our p tags nested inside of the parent class turn red. Using inheritance this way is extremely powerful and allows for more natural development when building user interfaces.

## CSS Specificity

- Specificity is the concept we use to describe the ability to style many elements or just one element using CSS selectors. Selectors allows us to access HTML tags and update their styles.

#### Specificity Weight

- Think of specificity  weight like the waterfall example used earlier. The water at the top of the waterfall is less specific and can be overwritten further.

- The diagram below helps visualize specificity weight. Note the < symbol is used to represent "less specific". The more you read to the right, the more specific a selector or style will be.

```
* < elements < classes, pesudo-classes, attributes < IDs < inline styles < !important
```

The selectors above are very common in styling practices, but they do not represent every possible selector. It is recommended that you solidify your knowledge of these selectors first before moving on to more advanced selectors.

### Universal Selectors *

There are occasions you would want to select every element on a web page. The universal selector, sometimes call the wild car or star selectors, dos precisely that.

Specificity Weight: Less specific than any selector.

#### CSS Syntax example:

```
* {
  color: red;
}
```
