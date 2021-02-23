# CSS Layouts

Basic HTML and CSS are fundamental to any website or web app on the internet.

This section will talk about creating layouts using CSS by learning things like flexbox.

### Flexbox

Flex box confuses new developers because previous uses of display only had one effect. Using display: flex; invokes a whole module of options.


Most properties in CSS perform one action based on their value. For example, color property in CSS only performs setting a color on the font.


#### Display flexbox

- When we introduce display: flex into our CSS, we are getting many new properties and rules

- Using the simple lines of code comes loading with additional properties we can now use. For example we can now use a property called flex-direction that wouldn't have worked before we enabled our flexbox module with display: flex.

- We also gain some new rules when using a flexbox module. For example, the element which we displayed flex on is now considered a flex container. Any elements nested inside of our flex container are now considered to be flex items, and they gain another set of properties.

- It is important to note that the relationship between a flex container and a flex item does not nest any deeper. The flex box module was designed only to nest one level deep. ]

ie:

```
nav{
  display: flex;
}
```

```
<!-- flex container -->
<nav>
  <!-- flex items -->
  <a href="#">
    <!-- flex box module does NOT reach this far! -->
    Home
  </a>
  <a href="#">About</a>
  <a href="#">Blog</a>
  <a href="#">Contact</a>
</nav>
```

Note that while the content within the a tag is not impacted by the flexbox module. If we wanted to use flex properties on the content, we would need to display:flex on the a tag as well.


## Flex Container

One of the first rule when using flex is that the element becomes a flex container. This concept is extremely important because we use flex container properties to control our nested flex items.

#### Flex Direction

- all flex box modules follow a general direction to flow. This direction is known as the main axis.

Here are the values and content flow of flex-direction:

```
/* Main axis will flow from left to right */
flex-direction: row;

/* Main axis will flow from right to left */
flex-direction: row-reverse;

/* Main axis will flow from top to bottom */
flex-direction: column;

/* Main axis will flow from bottom to top */
flex-direction: column-reverse;
```

#### Flex-wrap

Often flex-items will be larger than their flex container width. When this occurs, we can actually control what hapens when using flex-wrap.

The default flex-wrap is actually nowrap. That means flexbox modules try to contain everything inside them. This can be really amazing feature but sometimes you want your flex items to wrap down to the next line.

We can use the value wrap or wrap-reverse to tell our flex items to jump down when they hit the flex container width limits.

```
/* This is the default value */
flex-wrap: nowrap;

/* Wraps content from top to bottom */
flex-wrap: wrap;

/* Wraps content from bottom to top */
flex-wrap: wrap-reverse;
```


#### Flex-flow

- Flex-flow is simply a shorthand version of both flex-direction and flex-wrap.

```
/* This is the default value */
flex-wrap: nowrap;

/* Wraps content from top to bottom */
flex-wrap: wrap;

/* Wraps content from bottom to top */
flex-wrap: wrap-reverse;
```


#### Justify-content

- When you see the word justify in a flex box, start thinking main axis. Anytime we want to style flex items on the main axis, we can use justify content to get the job done.

```
/* This is the default value, it places content at the start point of the main axis */
justify-content: flex-start;

/* Content is placed as the end point of the main axis */
justify-content: flex-end;

/* Content is placed as the center of the main axis */
justify-content: center;

/* Content has an even space between each item on the main axis */
justify-content: space-between;

/* Content has equal space around each item on the main axis */
justify-content: space-around;

/* Content has even space around each item on the main axis */
justify-content: space-evenly;
```

#### Align items

- We know how do adjust flex items on the main axis using justify content. It's time to learn how to use our cross axis. The cross axis is perpendicular to the main axis. Anytime we use a property that starts with align, our minds should be trained to think cross axis.

```
/* It can come as a suprise to some that stretch is the default value for align-items. Stretch will literally stretch an item's white space to fill the full flex-container */
align-items: stretch;

/* All flex items are placed at the starting point of the cross axis */
align-items: flex-start;

/* All flex items are placed at the ending point of the cross axis */
align-items: flex-end;

/* All flex items are placed at the center of the cross axis */
align-items: center;

/* All flex items align with the bottom base of their text content on the cross axis */
align-items: baseline;
```


#### Align Content

- Similar to justify-content, align-content controls the white space for multiple lines of flex items on the cross axis.

Warning: align-content will not work if you don't have multiple items of flex items to style. If you only have one line of flex items, you won't see any changes.

```
/* Stretch will literally stretch multiple flex items white space to fill the full flex-container */
align-content: stretch;

/* Multiple lines of flex items are placed at the starting point of the cross axis */
align-content: flex-start;

/* Multiple lines of flex items are placed at the ending point of the cross axis */
align-content: flex-end;

/* Multiple lines of flex items are placed at the center of the cross axis */
align-content: center;

/* Multiple lines of flex items are evenly spaced between each other on the cross axis */
align-content: space-between;

/* Multiple lines of flex items have an equal distance of space between each other on the cross axis */
align-content: space-around;
```

#### Using Multiple properties:

It can be overwhelming at first to see the list of properties and values. The great news is, you only need to use one property and one value to get amazing results.

We can u se both justify-content: center and align-items: center to achieve a perfect centering.


Example:

```
.example-centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Flex item properties

- All properties we looked at above should be applied to the 'container' div that holds your displayed elements. In addition to this properties, there are properties that can be applied to the items themselves to govern how the items will look inside that container.

1. flex-grow - how an item will grow
2. flex-shrink - how an item will shrink
3. flex-basis -  default item size
4. order - can be use to move items within the container positive or negative numbers.
