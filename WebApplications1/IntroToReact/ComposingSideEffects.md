# Composing Side Effects

What are "side effects"? A side effect is anything that afects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don't require cleanup and those that do require cleanup.

A react  component without side effects is called a pure component. A component is considered pure if it always renders the same output for the same state and props. Similarly, a side effect is something that can cause a component to return a different output for the same state and props. Pure components don't have side effects. React offers us tools for managing side effects so we can avoid bugs and inconsistencies in our app. The effect hook (useEffect()) is one of those.

## The Effect Hook

The effect hook tells React that a component needs to run or execute, some side effect. This hook takes in two parameters. The first is a callback function where we can run the side effect. Let's take a look at an effect hook that is handling a console.log side effect:

```
useEffect(()=>{
  console.log("Hello from the Effect hook!");
})
```

Used inside the component, puts the effect function inside the component's function scope. This gives it access to state, props, and local variables. So we could  also do somethign like this:

```
useEffect(()=>{
  console.log(props.someProp, stateValueOne);
})
```

here are some basic examples of other common side effects we might see in React Components:

```
// Making API Calls
const [user, setUser] = useState();
const [error, setError] = useState();

useEffect(() => {
  fetchUserData(userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});

// Manipulating the DOM
const [count, setCount] = useState();
useEffect(() => {
    document.title= `Count is ${count}`;
});

useEffect(() => {
  console.log("The Component has mounted.");
}, []);
```

#### Overview

In the examples we saw above, the effect hooks used were not synced with any particular pieces of data. Because of that, each of those hooks would run every single time a piece of state or a prop changed. With a lot of side effects, this would be somewhat concerning from a performance standpoint. Or, in the worst-case scenarios, where a side effect cause the state to change, we would find ourselves in an infinite loop and eventually crash our browser.

Luckily, we can sync our side effects with state and props changes. We do this by passing in a dependency array as a second argument to the effect hook. Note that this argument is optional. If we don't pass in an array after the callback function, the effect will fire after every change. Let's take a look at a data fetch that sets state in our component.

```
const [user, setUser] = useState();
const [error, setError] = useState();

useEffect(() => {
  fetchUserData(props.userId)
  .then(res => setUser(res.data.user))
  .catch(err => setError(err.response.message));
});
```

When this effect fires, it calls either setUser or setError. That means that one of those pieces of state will change, which would, in turn, cause the effect to fire again, causing the state to change, firing the effect again, and placing us in an infinite loop!

If you look closely at the effect hook, you'll notice that this effect also relies on another piece of data. That is **props.userId**. As we think about the component that this hook would be in, we can imagine that we only want this effect to fire if that **user*d** prop changes, right? WE definitely don't want it to fire if **user** or **error** change! So, that means that we want this effect to sync up with props.userId only - nothing else. Let's go ahead and add the dependency array argument with that particular dependency in the array.

```
const [user, setUser] = useState();
const [error, setError] = useState();

useEffect(() =>{
    fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
}, [props.userId]); // Dependency array added
```

Now this effect will fire when and only when props.userId changes.

But wait, wouldn't we want this effect to fire when the component first mounts? Yes, definitely. Even with a dependency array added to the effect hook, it will fire when the component mounts, and then only fire when the given dependency changes.

this bring up one last thought. How can we add an effect to our component that we only want to fire off once as a component mounts, and not any other times during the life of the component? Essentially, we would want to tell the effect hook to not synchronize that particular effect with any state/props changes. We can solve this by adding the dependency array to the effect hook, but leaving it blank.

```
const [data, setData] = useState();
const [error, setError] = useState();

useEffect(() => {
    getInitialData()
    .then(res => setData(res.data))
    .catch(err => setError(err.response));
}, []);
```

### Summary

Using a dependency array as the second argument in the effect hook, we can tell it with which state or props the effect should be synced. This is a handy guide to use as you begin to build the mental model for this principle.  

```
useEffect(fn); // all staste and props
useEffect(fn, []); // no state or props
useEffect(fn, [these, state, props]);
```


#### Overview
