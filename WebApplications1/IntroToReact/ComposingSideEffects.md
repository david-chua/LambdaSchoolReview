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

Now that we know how to sync effects with data, and we know how to avoid infinite loops, let's take a more in-depth look at fetching data using an effect hook. There are a couple of possible situations we want to look at when fetching data in a component. First is writing an effect that is not synced with any state or props so that it only fetches data as the component mounts. Next, is writing an effect that makes an API call that could fire again during the life of the component, depending on a piece of state or a prop.

#### Fetching Data when a component mounts

Let's fetch a random dog image to render when this component mounts. We'll do this using the "dogs" API.

The first thing we'll do is get our **App** component with some state and proper JSX:

```
function App(){
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog"/>
    </div>
  );
}
```

Next we'll add the effect hook (minus the data fetch logic) with an empty dependency array.

```
function App(){
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {}, []); // Not synced with any data, so this effect only fires once.

  return(
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="A random dog"/>
    </div>
  )
}
```

Now we can add the fetch logic, We'll use Axios here:

```
function App(){
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(()=>{
    // This axios GET request will return a single image
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      // Which we then set to state
      .then(res=> setDogPic(res.data.message))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog"/>
    </div>
  );
}
```

#### Fetching data multiple times with synced effect hooks

Often, we will want to make the same fetch call multiple times during the life of a component, all based on when certain data changes. It can be tempting to write a function outside of the effect hook that calls an API, then call that function from the effect hook during the mounting state, and then subsequently call it from a handler function later

```
const [data, setData] = useState();
const [query, setQuery] = useState();

// This effect will  only fire once when the component mounts
useEffect(() =>{
    fetchData(); // calls an external function that is dependent on state or props.
}, []);

// external function that relies on (or is dependent on) query
const fetchData = () => {
  axios.get('some/api/endpoint/' + query)
    .then(res => setData(res.data));
}

const handleChange = e =>{
  setQuery(e.target.value)
  fetchData(); // calls some external function after setting query.

  return(
    <>
      <input value={query} onChange={handleChange} />
      ...
    </>
  );
}
```

This is not safe, as the effect hook calls fetchData which relies on query.

It's difficult to remember which props or state are used by functions outside of the effect. This is why usually you'll want to declare functions needed by an effect inside of it. Then it's easy to see what values from the component scope that effect depends on.

Let's put the fetchData function inside th eeffect hook, and sync the hook with query:

```
const [data,setData] = useState();
const [query, setQuery] = useState();

// This effect will fire only once when the component mounts
useEffect(() => {
    const fetchData = () => {
      axios.get("some/api/endpoint/" + query)
      .then(res => setData(res.data));
    }

    fetchData(); // calls an external function
}, [query]);

cosnt handleChange = e =>{
  setQuery(e.target.value)
}

return(
  <>
    <input value={query} onChange={handleChange}/>
  </>
  );
}
```

So to examine this more closely, we will fetch data from the algolia API based on a query string typed into an input.

To start, we have our state and JSX ready.

```
function App(){
  const [data, setData] = useState();
  const [query, setQuery] = useState("react");

  return(
    <>
      <input value={query} onChange={e => setQuery(e.target.value)}/>
      <ul>
        {data.hits.map(item =>(
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
```

Next, we will add the e ffect hook, synchronizing the hook to the query state, tied into the input.

```
function App(){
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {}, [query]) // when query change, fire this effect again .

  return(
    <>
      <input value={query} onChange={e => setQuery(e.target.value)}/>
      <ul>
        {data.hits.map(item =>{
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        })}
      </ul>
    </>
  );
}
```

Finally, we will add the fetch logic:

```
function App(){
  const [data, setData] = useState({hits:[] });
  const [query, setQuery] = useState("react");

  useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://hn.algolia.com/api/v1/search?query=" + query)
          .then(res=> setData(result.data));
      };

      fetchData();
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)}/>
      <ul>
        {data.hits.map(item =>(
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
        ))}
      </ul>
    </>
  );
}
```

#### Overview

Perhaps you've created a subscription to a chat API to give a live chat functionality to your app. Or more simply, you've added an event listener to the DOM. These are both functions that need to be 'cleaned up' when the component is unmounting, so we don't cause unnecessary memory leak.

To clean up an effect, we return a function from the effect hook's callback function like this:

```
useEffect(() => {
  // We write our desired effect as before.
  console.log("The Effect Hook has run.");
  // Returning a function will tell React that you want this
  // code to run when the component unmounts or re-renders
  return () => console.log("The Effect Hook has been cleaned up.");
});
```

The returned function is called when the component is unmounting, giving us a place to clean up subscription and event listeners.

###### Follow Along

Let's add an event listener to a function that listens for the mouse position. When the mouse moves, the event listener will update some state with a new mouse position, and the component will render the mouse position state to the DOM.

```
const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  useEffect(() => {}, []); // We only want to create  the event listener once, so this effect will only fire when the component mounts.

  return(
    <div>
      {position.x}: {position.y}
    </div>
  )
}
```

NOw add the event listener with the event listener's callback function.

```
const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add an event listener
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
  }, []);

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
```

Finally return a function from the effect hook to clean up the event listener.

```
const Ap =() => {
  const [position, setPosition] = useState({ x: 0, y:0 });

  useEffect(() => {
      const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove', setFromEvent");

      // the function returned here will remove, or "cleanup", the event listener.
      return () => {
        window.removeEventListener("mousemove", setFromEvent");
      }
  }, []);

  return(
    <div>
      {position.x}: {position.y}
    </div>
  )
}
```
