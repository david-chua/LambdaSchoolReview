# React Router

## What is Routing?

Being able to access information based on a URL is not only a powerful tool at our disposal as end users and developers, but it is also a standard. Routing is essential for handling a communication piece between computers. Routing is the way we navigate through websites and web applications today. When we click on a link on any web app or website, we are routing to a URL and requesting some information that lives somewhere else.

## What is a Server?

In computer science, "Server" refers to centralized resources on a network. These servers are physical devices, usually housed with other servers in large warehouses, that runs "behind the scenes" work of the internet like data storage. When you route, you are routing on a server.

Websites and Web applications all rely heavily on information that is controlled by a server. We can't get away from them, even when we hear buzz words like "serverless", we still rely on machines that communication across channels to deliver content to us and end-users. Imagine if everytime you clicked on something on a website, you had to request a resource from a server, and then the server had to go and retrieve the data on the screen. For a long time now, this was how the web worked.

## Client-side (traditional) and Server-side(SPA) Routing

### Server-Side Routing

When we request information from a server (by clicking on a link or button), that server then sends back the document that was requested. For example, we click on a link and our URL changes to match the request, then the server goes and finds a template or some HTML file and sends it back across the world wide web to deliver that content to the user.

All of this is handled and achieved on the server and there are few things that happen here. First, the server will refresh the web page that we're looking at. This is because a new request was made for information, and the information given was a bunch of DOM elements, so we have to re-paint the web page. The information requested will be the only information given, no more, and no less. Because of this, we get the opportunity to load smaller portions of the webpage as opposed to requesting/loading the entire thing the whole time the way that we do in Client-side routing.

### Client-Side Routing

Now that we know how things used to be done, we can talk about modern routing. JS and the other tools that we get to work with within JavaScript are super sophisticated. Because of the arrival of tools like Chrome's V8 engine, we can do a lot of things that weren't previously possible. One of the new patterns is using JavaScript to maintain state (or memory) within our applications and use that memory to tell the Browser  what to display when a resource is requested.

When Routing is handled internally by the JavaScript that is already on the page, we achieve what is known as Client-Side routing. And this tool is how we get things done today, especially in React! And the best part about this is that the page won't refresh. The data is just there, displayed when we ask for it. How this works is that when a user clicks on a requested resource, instead of the client asking for that resource from the server via a URL, JavaScript will prevent this. We then get the resource (state) that is already available to us rendered out, and when using react, this happens beautifully through component-based architecture.


### React Router

React Router is declarative style routing for React applications. React Router is a versatile tool because it can be used for React and React Native as well. The best part of React Router is that it pushes the envelope for what a router should be on the client. Since it was built for use within a React ecosystem, it uses a Reactive and Declarative context. This means we get a much more dynamic routing experience when building and designing our Routes within our React Apps.

### Route

Routes are a way of getting to a destination. A route can specify which components to render on the page, and in what order, we've seen before.

To set up React Router, you need to declare what components will be mounted when certain URL paths are met. This step happens after we've wrapped our Root component in the Router or BrowserRouter component. The best part of React Router is that you can do this at pretty much any point during the development process, whereas previously you had to declare your routes early on in the development cycle. What this allows us to do is figure out more important things without allowing routing to get in the way. React Router is a super usefull tool for this reason!

You can install by using the following command: **npm install react-router-dom** and import Route within the application as follows

```
import { Route } from 'react-router-dom';
```

The **Route** component declares what components wi ll be mounted based on the **URL's** the  user request. The best part about this process is that we get a chance to do this in a very "React" way.

Let's picture a component **Uses** that will display a list of users in your system when the URL **www.coolestapp.com/users** is requested. The **Route** component takes in a few props; the first is the URL **path** where the Route component will trigger. Next ist he component prop. This is the component that you want React to mount when the URL matches the requested path. So in our case, when **/users** is requested, the **Users** component will be mounted.

```
<Route path="/users" component={Users}/>
```

This route will take us to the **users** component wherever the **/users** URL is requested within our application. You may be thinking to yourself at this point, is that really it? The answer is yes.

Now let's see this all in action in a large portion of an application. Picture an app that has 3 major components that will need to be rendered as part of **Navigation** system. ** Home, Contact, and About**. Each of these three components will need to be rendered when a user requests the **"/", "/contact", "/about" paths in our app. So, let us refer to our question above

A user requests **/** so we will mount the Home component.
A user request **/contact** so we will mount the Contact component.
A user request **/about** so let us render the About component.

```
<Route path="/" component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/about" component={About} />
```

### The exact prop

The exact prop is a very important feature of the Route component. It comes to us because of the way that the package was built.

When it comes down to it, we are using an API that already exists for us as web developers. And that is the History API that is built into our web browser. If the URL / and /about are both requests, and we have an algorithm to match the characters in the sequence /, /about. Both the / and the /12 will match. Because of the way this is setup, if we request the route /about, then both the Home Component and the About component will be rendered. React Router anticipates this, and the exact prop to the Route component solves the problem.

By placing exact on a <Route /> component, you are saying that the specific path will only trigger if it matches exactly the path requested. This defaults to false, so by simply including the exact prop on your Route component, it will set it to true and only mount our Home component when the specific path / is requested  and not when /about is requested.

```
<Route exact path="/" commponent={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
```
### Link

The link component can be included just like any other component in your application. This will produce an anchor tag that will link to a pre-defined component of your choice. Remember, if we setup our routes properly, we'll be able to use the anchor component to navigate our browsers to the path where a component can be mounted. We can think of our Route component as the boat on the ocean, and the Link as the wind and sails that make the boat move.

```
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

As is the case with all of the components, that we get from React Router, Link will take a few props that we can use to control the component and allow it to work for us.

The first thing that Link takes as props is the **to** props. This is just like the **href="/about"** attribute on the anchor tag.

### Switch

If a route matches multiple routes enclosed in a switch statement, the browser will only render the first component it comes across. This can come in handy when considering nested routes.
