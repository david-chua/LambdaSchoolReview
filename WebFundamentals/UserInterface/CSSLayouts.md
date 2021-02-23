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
