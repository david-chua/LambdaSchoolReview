# Context API

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (ie: locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

We use the Context API when we have global data that lots of components share (thins like user or theme) or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

One caveat here is that it can make components harder to reuse. Another architectural pattern you may want to look at is **component composition**

## Overview

**Context API** allows us to create what's known as a context object.

```
import { createConext } from 'react';
const ContextObject = createContext();

// usually we'll name the object by the data it will hold - ie: UserContext, or MoviesContext, etc..
```

This gives us two important components to work with. A **ContextObject.Provider** and a **ContextObject.Consumer**.

The **Provider** method accepts a single prop called value, the value prop is used to provide our data across our app.

```
<ContextObject.Provider value={dataToPassDown}>
  <NestedComponent />
  <OtherNestedComponent />
</ContextObject.Provider>
```

The context **Consumer** consumes and returns the value provided by the **Provider**

## How to utilize the **Context API**

Follow along sample app: https://codesandbox.io/s/react-context-api-x7bru?file=/src/index.js

Diving into the code, you'll notice we're bringing in two hooks from the react library **useState** and **useEffect**.

the **useState** hook holds and sets user state. The **useEffect8* hook perform a pseudo API calls that sets "my user" to the state.

You'll also notice a **User** component rendering **Name goes here** as a placeholder.

In this example, we want to be able to provide data to the child component (based on user data sitting in state) and consume it, using **Context API**

1. The first thing we need to do is make a new folder named **contexts**. This folder is going to hold all the context objects we create.

2. Inside that folder we need to create a new file named **UserContext.js**. This is where we're going to create our first context object.

3. Inside that file, we're going to create our **UserContext**.

```
import { createContext } from 'react';
export const UserContext = createContext();
```

Now that we have created our UserContext, let's import it into our index.js

```
import { UserContext } from '../contexts/UserContext';
```

After creating and importing our **UserContext** we can start providing our user data across application.

To do so, we need to wrap all of our child components inside of our **UserContext Provider** and pass it a prop of **value**, this prop contains our user state.

```
return (
    <UserContext.Provider value={user}>
      <div className="container">
        <User />
      </div>
    </UserContext.Provider>
)
```

Doing so, we allow all child components of our UserContext.Provider to consume the value(s) that come from the hook, in our case, the value is a user object.

## overview:

Consuming the data passed into the provider is the final step for using the Context API. We will use a context hook for this, though keep in mind that you can use render props as well.

```
import { UserContext } from 'react';
import { ContextObjects } from '../contexts';
...


// inside the component
const myData = useContext(ContextObject);

// or you can destructure the data like this:
const { someData, moreData } = usecontext(ContextObject);
```

Now you're ready to use the data in your component.

## Follow along:

In the previous objective, we created our **UserContext** hook and passed our data into the provider. Now it's time to consume it.

To do so, import the **useContext** hook from the react library and our **UserContext**

```
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
```

After importing our **UserContext**, we will consume the data from it.

```
const user = useContext(UserContext);
```

Finally, we can render our **user** to the screen.

```
return(
    <div className="profile">
      <p>
        {user.lastName}, {user.firstName}
      </P>
    </div>
);
```

## Lecture Notes

### State/Props

#### Pros

* Easy to setup
* Easy to modify

Cons

* No Separation of Concerns
* Gets messy when spread across components

Recommendation:

* Only use for smaller projects or when state is only used within one component.

### Reducers and Redux

#### Pros

* Separation of Concerns
* Reducers are easy to read
* Easy to add features
* Can connect to any state

#### Cons

* Lots of moving parts
* Syntax can be confusing
* Doesn't allow state over branches of components.

Recommendation:

* Industry Standard

### Context API

#### Pros

* Simple to setup
* Can connect to any state
* Can connect multiple context to different parts of the app

#### Cons

* Still new
* Can also be messy if not used with restraint

Recommendation:

* Young upstart
