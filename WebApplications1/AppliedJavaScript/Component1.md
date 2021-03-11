# Component 1

A component is made of several parts: HTML, CSS, or JavaScript brought together for reuse in a website or application.

## Components - HTML:

When buildting HTML with a component mentality, you need ot ask the question: "What are you trying to display from your data?"

Because we are focused on user interface concepts, we don't need ot access a database at this point. For us, static HTML is data, since it is, after all, what we're trying to display.


Review the following code:

```
<div class="custom-buttons">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Button 4</button>
</div>
```

Notice we have a repeating button tags. This is an opportunity for us to think about how we could use our CSS and JavaScript to create multiple buttons regardless of how many buttons we have to work with. The HTML gives us a great starting point for a button component, but we need to style it for reuse.

## Components - CSS:

Writing CSS for components is more about rationale than syntax. Components should be modular or stand alone. With that in mind, you should try to think of your component CSS in a way that could be moved around at any moment and not reliant on any other styles being in place.

One way that can help you control your styles is to use a specificity chain that only matches up with your component. You could use a specific class name to accomplish this:

```
<div class="custom-buttons">
  <button class="custom-btn">Button 1</button>
  <button class="custom-btn">Button 2</button>
  <button class="custom-btn">Button 3</button>
  <button class="custom-btn">Button 4</button>
</div>
```

Naming convention vary wildly within the workplace. The recommendation is to adjust to the standards decided on your employer.

If you're using a preprocessor, a common practice is to have your preprocessed file named after the component. You could then import your component name into the main file. Here is an example of the import you could use and then what the file could look like:

```
@import custon-btn.less

.custom-btn {
  // custom styles here
}
```

## Components: JavaScript:

JavaScript is used to consume the data and output the content into the DOM. JavaScript's involvement in components is the glue that ties everything together.


## Overview

sometimes it makes sense to build several elements with similar functionality. Perhaps lots of components have click handlers that use the same callback or a group of components shares the same style. This verbosity can be frustrating, but thankfully, you don't need to repeat yourself in code. Utilizing a JS function, can create dynamic components on the fly and add them to the DOM.


#### createElement

```
let button = document.createElement('button');
button.textContent = 'Button 1';
button.classList.add('button');
button.addEventListener('click', (e) => {
  console.log('clicked!')
});

parent.appendChild(button);
```

#### functions

Now, sticking with the create element example, imagine, if we want to create many buttons on our page. We could very quickly repeat the code there for each button we want to create, appending them to the parent each time. Although from our knowledge so far, we know that repeating ourselves is something we want to avoid. We can easily compartmentalize all of the code into a function.

```
function buttonCreator(buttonText){
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('button');
  button.addEventListener('click', (e) => {
    console.log('clicked');
  });

  return button;
}

let firstButton = buttonCreator('Button-1');
let secondButton = buttonCreator('Button-2');

parent.appendChild(firstButton);
parent.appendChild(secondButton);

```

And Just like that, we can create as many new button component without repeating ourselves.

#### Overview

```
const data = [
  "Button One",
  "Button Two",
  "Button Three",
  "Button Four"
]
```

let's use the buttonCreator function from the last objective:

```
function buttonCreator(buttonText){
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('button');
  button.addEventListener('click', (e) => {
    console.log('clicked');
  });

  return button;
}
```

## .forEach

One of the simpless array methods is .forEach - it runs the array through a loop, passing each item to our callback function. It doesn't return a new array or mutate the data at all (unless we tell it to). **.forEAch** is a simple way to iterate over the array, create components, and add them instantly to the DOM.

```
data.forEach((arrayItem) => {
    let newButton = buttonCreator(arrayItem);

    parent.appendChild(newButton);
});
```

Creating the buttons is simple. The one downside to this method is that we add the items to the DOM instantly, what if we wanted to create the component and add them at a different time?

#### .map

We know that .map returns a new array with the items transformed (by our callback).

```
let newComponents = data.map((arrayItem) =>{
    let newButton = buttonCreator(arrayItem);

    // Remember, we always need to return something when we use .map
    return newButton
})
```

Now that we have an array of DOM elements, we can do whatever we'd like with this item. We can wait to add the components to the DOM, or we can manipulate them further, the sky is the limit! Now to add them to the DOM using forEach:

```
newComponents.forEach(component => {
  parent.appendChild(component);
  })
```
