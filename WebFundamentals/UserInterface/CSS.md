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

CSS Syntax example:

```
* {
  color: red;
}
```

### Element Selectors

- This is for styling all elements with the specific tags to follow the styles.

Specificity weight: More specific than universal less specific than everything else.


HTML Syntax Example:

```
<h1> I'm an h1 element </h1>
```

CSS Syntanx:

```
h1{
  color: blue;
}
```

### Class Selector

Class selectors begin to introduce a heavier specificity than compared to element or universal selectors. Classes allow us to select individual elements by placing a special attribute in our HTML. We can use the same class over and over again on many elements. This behavior is extremely powerful and allows designers and develoeprs to be more efficient.

Specificity Weight: More than universal and element, less than ID, inline and !important.

HTML Syntax examples

```
<h1 class="example-class"> I'm a class</h1>
<h1 class="example-class"> I'm a duplicate class</h1>
<h1 class="another-class"> New class selector</h1>
```

CSS Synyax

```
.example-class{
  color: green;
  font-size: 16rem;
  text-align: center;
}
```

Multiple classes are unique in that we can have multiple classes in the same HTML attribute. This allows for layers of class specificity weight that we can control by using siblings selectors.

Specificity weight: same overall weight as a single class, but lowest class on the page wins.

### Pseudo-Classes

- This is used when you may not have a set amount of elements, but you still want to style them individually.

For example, you are given a list of invenory. That list items grows and shrinks everyday with purchases and new items.

Now let's imagine that the last item in the invetory needs to update to a color to signify the end of the inventory. Without pseudo-classes, we couldn't achieve that result.

WE could use something like li:last-child to always select the last child in an unordered list to achieve our goal with the inventory.

Specificity Weight:

- Same specificity weight as classes. More specific than universal and element.
- Less specific than ID, inline and !important.


HTML Example:

```
<h1 class="normal">Normal class here</h1>  
<h1 class="normal">Normal class here</h1>  
<h1 class="normal">Psuedo class found here!</h1>  
```

CSS Syntax:

```
h1:last-child {  
  color: orange;  
}  
```


### ID Selectors

IDs are only allowed to be used once per HTML page. Use IDs for very specific reasons that can't be accomplished using a class.

Specificity Weight:

- More than universal, element, pseudo-class, and Classes.
- Less than inline styles and !important.

HTML Syntax:

```
<h1 id="example-id">I have an ID</h1>  
```

CSs Syntax:

```
#example-id {  
  color: gold;  
}
```


## 3 Different Style Integrations

1. Inline Styles
2. Embedded style tag in the HTML page
3. Externally linked CSS file

The standards the best approach change with the flow of new technology, but for now, we will say that external style sheets are the way to code. This is because inline and stye tags are more specific and we want to control all our style specificity in one place as we learn.


## CSS reset

A CSS reset is when a developer will remove all default styling by browsers. Usually a style sheet will reset all box model and font properties to 0 or inherit.

Eric Meyer's popular CSS reset:

```

html, body, div, span, applet, object, iframe,  
h1, h2, h3, h4, h5, h6, p, blockquote, pre,  
a, abbr, acronym, address, big, cite, code,  
del, dfn, em, img, ins, kbd, q, s, samp,  
small, strike, strong, sub, sup, tt, var,  
b, u, i, center,  
dl, dt, dd, ol, ul, li,  
fieldset, form, label, legend,  
table, caption, tbody, tfoot, thead, tr, th, td,  
article, aside, canvas, details, embed,  
figure, figcaption, footer, header, hgroup,  
menu, nav, output, ruby, section, summary,  
time, mark, audio, video {  
margin: 0;  
padding: 0;  
border: 0;  
font-size: 100%;  
font: inherit;  
vertical-align: baseline;  
}

```

## px, em, and rem

#### px

- px unit is referred to as an absolute length unit. This means that px does not adjust for its surroundings. That being understood, px units are still viable in some scenarios where layout control is needed. Modern browsers now allow  px units to scale with the zoomed in viewport.

Syntax Examples

```
<h1> Example</h1>
```

```
h1{
  font-size: 10px;
}
```

Pros:

- Easiest unit for developers to read from design files
- Modern browsers now allow px units to grow with built in zoom features
- No reliance on cascading for sizing

Cons:

- Rigid unit that is not responsive in layouts
- Hard coded font size value are not accessible for users that change their own default settings.

#### em

- em unit is referred to as a relative unit length. This means that em will adjust to its surroundings.
- In the example below, notice that .main-content has the font-size: 10px. The em inside of our h1 will now adjust its value to match the 10px. This is useful when building responsive layouts for adjusting fonts on different  devices.

One of the issues with em is its inherited calculation. Sometiems changing just one parent element can lead to a cascade of skewed sizes. The cascade of font sizes can easily compound, creating hard-to-anticipate issues.

syntax example:

```
<section class="main-content">
  <h1>Example</h1>
</section>
```

```
.main-content {
  font-size: 10px;
}

.main-content h1 {
  /* 2em === 20px */
  font-size: 2em;
}
```

Pros:

- Responsive to its surroundings

Cons:

- Can be too flexible at times and create cascading font sizes that weren't expected
- Converting px to em when creating code from a design file usually requires a calculator or a memorization that can feel cumbersome


#### rem

The rem or root em unit is also referred to as a relative length unit. The root part means that this unit looks to the root element in a page. Usually the root element is going ot be the html tag in a web application

Using hard coded pixel on the html tag is bad practice as it overwrites the user's default settings on their browser. This is where a % based comes to be used. A 62.5% base value converts rem units by the power of them. So 1 rem = 10px throughout the document.

Some examples
18 px == 1.8 rem
13 px = 1.3 rem
27 px = 2.7 rem

Syntax example:

```
<section class="main-content">
  <h1>Example</h1>
</section>
```

```
html {
  /* This technically works but is too rigid and not accessible */
  font-size: 16px;
  /* Best Practice */
  font-size: 62.5%;
}

.main-content {
  font-size: 10px;
}

.main-content h1 {
  /* 2rem === 20px */
  font-size: 2rem;
}
```

Pros:

- Responsive to root element only
- If you use a % based unit, you can achieve accessibility gains and eliminate awkward conversion system of 16px ( the browser default size).

Cons:

- If you don't make the root element flexible, you will hurt accessibility by overwriting default user settings in the browser.
- Converting px to rem when creating code from a design file naturally requires a calculator or memorization that can feel cumbersome.


## % and vw/vh

#### %

The % unit is referred to as a relative length unit. The % unit is usually used for building responsive layouts more than for font sizing. % based layouts start at the viewport width and then cascade down through nested units.

Look at the example below to see how the cascade of nested % based units work. You can see the .main-content section is 100% of its viewport as its top level element in our example.

Note the h1 width is 50% of the .main-content and not the viewport. That means if we adjusted .main content width to a different value like 60%, the h1 width would become 50% of the new 60% value.

HTML:

```
<section class="main-content">
  <h1>Example</h1>
</section>
```

CSS:

```
.main-content {
/* this will be the entire viewport */
  width: 100%;
}

.main-content h1 {
/* this will be half of .main-content */
  width: 50%;
}
```

Pros:

- Responsiveness starts at the viewport level and cascades down to nested elements helping you build a layout to adjust to any size.

Cons:

- You have to be careful with % based layout as widths can get too small very fast
- If you don't add everything up to 100% when building layout, % can cause a lot of frustration searching the box model to see where the math went wrong.

#### vw/vh

- These units completely rely on the viewport of the browser window to render. These should typically only be used for specific used cases like full screen layouts.

If you have ever tried ot use height: 10%, you'll appreciate vw and vh. Rarely they are used to make a font fill the screen (think slideshows, or landing page headers w/ font size to 1/3 of viewport, e.g. font-size: 33vh).
