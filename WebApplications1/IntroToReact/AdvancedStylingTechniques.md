# Advanced Styling Techniques

**Styled Components** is a library for writing CSS in our JS files. As mentioned in the article above, it's not the idea of having HTML or CSS written in JS is bad, it's more that the implementation isn't properly implemented for either.

React introduced JSX as a better tool for writing HTML in JS, and now we have great libraries to write CSS in JS.

To use, first import styled default object from styled-components. This gives you access to every property on that objects.
Each property is a React component that will print out whatever property you reference as a DOM element.

```
import styled from 'styled-components'
```

```
// div
const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p``;

// section
const StyledSection = styled.section``;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;

//etc..
```


Example:

```
import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;

function SomeComponent(){
  return (
    <div className="wrapper">
      <h1>Hello from the Home Component</h1>
    </div>
  );
}

export default SomeComponent;
```

We have created a component called WrapperDiv that is going to take the place of the .wrapper div. We have passed two css properties and values - width and height. But what is up with the backtick syntax?

From the docs: "This unusual backtick syntax is a new JavaScript feature called a tagged template literal. You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks!"

So we are just invoking a function. And when we invoke this function, we are passing a string with our styles to it. Under the hood, styled components is going to render a div with a funny looking class name, and apply the styles that we passed to it.

```
import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;

function SomeComponent(){
  return(
    <WrapperDiv>
      <h1> Hello from the Home Component</h1>
    </WrapperDiv>
    )
}

export default SomeComponent;
```


There's more...

While this is all really cool, it seems like a little too much work if that is all we are gaining from styled-components, right?

Until we realize that there is so much more we can do! How about passing in props to change the color of buttons?

```
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding:  6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;

  ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
  ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
  ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
  ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function SomeComponent(){
  return(
    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

export default SomeComponent;
```

Note that inside the ${} we are running a function that takes in props, and returns the correct backgroun color based on prop.type. This has endless possibilities.

  So we just created a single, reusable <Button /> component that will change colors based on what we passed to the type prop! 

  We can create a "base" Button component, then create a TomatoButton component that extends some extra styles to it.

  ```
  import React from 'react';
  import styled from 'styled-components';

  const Button = styled.button`
    color: palevioletred:
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  // A new component based on Button, but with some override styles.

  const TomatoButton = styled(Button)`
    color: tomoato;
    border-color: tomato;
  `;

  function SomeComponent(){
    return(
      <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </div>
    )
  };

  export default SomeComponent;

  ```
