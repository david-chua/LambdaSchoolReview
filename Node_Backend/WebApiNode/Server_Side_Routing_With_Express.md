# Server Side Routing with Express

An example of GET requests on the different URLs, add the following endpoint:

```
// this request handler executes when making a GET request to /about
server.get('/about', (req,res) => {
    res.status(200).send('<h1>About Us</h1>');
});

// this request handler executes when making a GET request to /contact
server.get('/contact', (req,res) => {
    res.status(200).send('<h1>Contact Form</h1>');
});
```

Two things to note:

* We are using the same HTTP method on both endpoints, but express looks at the URL and executes the corresponding request handler.

* We can return a string with valid HTML.

## Follow Along - writing endpoints that executes different requests handlers on the smae URL by changing HTTP methods.

```
// This request handler executes when making a POST request to /hobbits.
server.post('/hobbits', (req,res) => {
    res.status(201).json({url:'/hobbits', operation: 'POST' });
});
```

Note taht we return HTTP status code 201 (created) for successful **POST** operations.

Next, we need to add an endpoint for **PUT** requests to the same URL.

```
// this request handler executes when making a DELETE request to /hobbits
server.delete('/hobbits', (req,res) => {
    res.status(204);
})
```

We are returning HTTP code status code 204 (No Content). Supposed you are returning any data to the client, perhaps the removed resource, on successful deletes. In that case, you'd change that to be 200 instead.

## Overview - Reading and Using Route parameters.

Let's revisit our **DELETE** endpoint.

```
server.delete('/hobbits', (req,res) => {
    res.status(204);
})
```

How does this client let the API know which hobbit should be deleted or updated? One way, the one we'll use is through **route parameters**.

WE define route parameters by adding it to the URL with a colon(**:**) in front of it. Express adds it to the params property part of the request object. Let's see it in action:

```
server.delete('/hobbits/:id', (req,res) =>{
    const id = req.params.id;
    // or we could estructure it like: const { id } = req.params;
    res.status(200).json({
      url: `/hobbits/${id}`,
      operation: `Delete for hobbit with id ${id}`
    })
})
```

This route handler will execute every **DELETE** url that begins with /hobbits/ followed by any value. So **DELETE** requests to **/hoobits/123** and **/hobbits/frodo** will both trigger the request handler. The value passed after **/hobbits/** will end up as the **id* property on **req.params**.

Ths value for a route parameter will always be string, even if the value passed is numeric. When hitting **/hobits/123** in our example, the type of **req.params.id** will be **string.


## Using the Query String

The query string is another strategy using the URL to pass information from clients to the server. The query string is structured as a set of key/value pairs. Each pair takes the form of key=value, and pairs are separated by an **&**. To mark the beginning of the query string, we add **?** at the end of the URL, followed by a set of key/value pairs.

An example of a query string would be: **https://www.google.com/search?q=lambda&tbo=1**. The query string portion is the **?q=lambda&tbo=1** and the key/value pairs are **q=lambda** and **tbo=1**.

Let's add sorting capabilities to our API. We'll provide a way for our clients to hit our **/hobbits** and pass the field they want to use to sort the responses, and our API will sort the data in ascending order.

```
server.get('/hobbits', (req,res) => {
    // query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
    const hobbits = [
      {
        id: 1,
        name: "Samwise Gamgee"
      },
      {
        id: 2,
        name: "Frodo Baggins"
      }
    ];

    // apply the sorting
    const response = hobbits.sort((a,b) => (
        a[sortField] < b[sortField] ? -1 : 1)
    );

    res.status(200).json(response);
});
```

Visit the endpoint (/hobbits?sortby=name) and the list should be sorted by name. Visit the endpoint ('hobbits?sortby=id'), and the list should be now sorted by id. If no sort by parameter is provided, it should default to sorting by id.

To read values from the query string, we use the **req.query** object added by Express. There will be a key and a value in the req.query object for each key/value pair found in the query string.

The parameter's value will be of type **array** if more than one value is passed for the same key and **string** when only one value is passed. For example, in the query string **?id=123**, req.query.id will be a string, but for **?id=123&id=234**, it will be an array.

Another gotcha is that the names of the query string are case sensitive **sortby** and **sortBy** are two different parameters.

## Reading Data from the Request Body

We begin by taking another look at the **POST /hobbits** endpoint. We need to read the hobbits' information to add it to the **hobbits** array.

```
// add this code right after const server = express();
server.use(express.json());

let hobbits = [
  {
    id: 1,
    name: "Samwise Gamgee"
  },
  {
    id: 2,
    name: "Frodo Baggins"
  }
];

let nextId = 3;

// and modify the post endpoint like so:
server.post('/hobbits', (req,res) => {
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbits0;)
})

```

To make this work with the hobbits array, we first move out of the get endpoint into the outer scope. Now we have access to it from all route handlers.

Then we define a variable for manual id generation. When using a database, this is not necessary as the database management system generates ids automatically.

To read data from the request body, we need two things:

1. Add the line: **server.use(express.json())** after the express application has been created.
2. Read the data from the body property that Express adds to the request object. Express takes all the client's information from the body and makes it available as a nice Javascript object.

**Note that we are skipping data validation to keep this demo simple, but in production application, you would validate before attempting to save to the database**

## Implement Update Functionality

Original output:

```
server.put('/hobbits', (req,res) => {
    res.status(200).json({url: '/hobbits', operation: 'PUT' })
})
```

We start by adding support for a route parameter the clients can use to specify the id of the hobbit they intend to update.

```
server.put('/hobbits/:id', (req,res) => {
    res.status(200).json({url: '/hobbits', operation: 'PUT' })
});
```

Next we read the hobbit info from the request body by using req.body and use it to update the existing body.

```
server.put('/hobbits/:id', (req,res) =>{
    const hobbit = hobbits.find(h => h.id == req.params(id));

    if (!hobbit){
      res.status(404).json({ message: 'Hobbit does not exist' })
    } else {
      // modify the existing hobbit
      Object.assign(hobbit, req.body);
      res.status(200).json(hobbit);
    }
})
```

## Overview

REST is a generally agreed upon set of principles and constraints. They are recommendations , not a standard.

When designing RESTful application, keep the following principles in mind:

* everything is a resource
* each resource is accessible via a unique URL
* resources can have multiple representations
* communication happens over a stateless protocol (HTTP)
* resource management happens via HTTP methods.

Applying the REST architecture to our APIs can make them scalable and simpler to maintain and extend.

## Follow Along

REST APIs have six constraints

1. **Client-server** architecture
2. **Stateless** architecture. Each request should stand on its own, and order should not matter. No shared state.
3. **Cacheable**: improves network performance.
    * GET, PUT, DELETE should be idempotent (the same command executed multiple times, the state of resources on the server is exactly the same, much like pure functions).
    * POST is not idempotent.
    * Caching is a way to store and retrieve data so that the server can fulfill future request faster without repeating expensive calculations or operations.
4. **Layered System**: component A (a client) might be or might not communicate directly with component B (the server). There may be other layers between them like logging, caching, DNS server, load balancers, and authentication.
5. **Code on demand**
    * The API returns the resource and code to act on it.
    * The client only needs to know how to execute the code.
    * Makes the API more flexible, upgradeable, and extendible.
    * Most Web Applications sends JavaScript code along with data.
6. **Unifrom Interfaces**
    * Each resource should be accessible through a single URL. Not a hard requirement, but recommended.
    * We should be able to manage the resources through these representatives (the URL).
    * Every interaction with the resource should happen through the URL identifier we gave to it.
    * Self descriptive messages.
    * HATEOAS (Hypermedia As The Engine Of Application State). Much like a choose your own adventure book, the pages are not read in order. You start on page 1. Based on the information available, the reader (client) chooses the action to take, moving them to a different page.

## Overview

An Express Router behaves like a mini Express application. It can have its own Routing and Middleware. But it needs to exist in an Express application. Think of routers are a way of organizing Express applications - you write separate pieces taht can alter be composed together.

This hsould all become clear with an example.

We'll start with our main server file.

```
const express = require('express');

const server = express();

server.use('/', (req,res) => {
    res.send('API up and running!');
})    

server.liste(8000, () =>
    console.log('API running on PORT 8000')
)
```

If our applications only included the above code, we wouldn't need routers. But imagine that this application needs endpoints for the users resource alone.

Now imagine this application also needs to deal with products, orders, returns, categories, providers, warehouses, clients, employees, and more.

Even if we only have five endpoints per resource, each endpoint will have many lines of code, and you can see how trying to cram all that code in a single file could get unwieldy real fast.

Let's rewrite it to separate the main server file from the file handling the routers for users.

Create a file to handle all routes related to the user resources.

```
// inside /users/userRoutes.js <- this can be place anywhere and called anything
const express = require('express');

const router = express.Router(); // notice the Uppercase R

// this file will only be used when the route begins with "/users"
// so we can remove that from the URLs, so "/users" becomes simply "/"
router.get('/', (req, res) => {
  res.status(200).send('hello from the GET /users endpoint');
});

router.get('/:id', (req, res) => {
  res.status(200).send('hello from the GET /users/:id endpoint');
});

router.post('/', (req, res) => {
  res.status(200).send('hello from the POST /users endpoint');
});

// ... and any other endpoint related to the user's resource

// after the route has been fully configured, we then export it to be required where needed
module.exports = router; // standard convention dictates that this is the last line on the file
```

Now, even if the user resources needs 8 or 10 endpoints, they are package neatly into this file.

How can we use it in our main file? Like so:

```
const express = require('express');

const userRoutes = require('./users/userRoutes');
const productRoutes = require('./products/productRoutes');
const clientRoutes = require('./clients/clientRoutes');

const server = express();

server.use('/users', userRoutes);
server.use('/products', productRoutes);
server.use('/clients', clientRoutes);

server.listen(8000, () => console.log('API running on port 8000'));
```

Much cleaner, we add three sets of endpoints to our server, where each needs only two lines of code.

There is an alternative syntax for writing route handlers, but we'll leave that for you to explore.

Also note that it is possible to have a central router representing our API and have that router import the routes. This logic cleans up our main server file even more. Let's s ee an example of that.

```
const express = require('express');
const apiRoutes = require('./api/apiRoutes');

const server = express();

server.use('/api', apiRoutes);

server.listen(8000, () => console.log('API is running on PORT 8000'));
```

And the apiRoutes could look like this:

```
// inside /api/apiRouts.js <-- this can be placed anywhere and called anything
const express = require('express');

// if the other routers are not nested inside /api then the paths wo uld change

const userRoutes = require('./users/userRoutes');
const productRoutes = require('./products/productRoutes');
const clientRoutes = require('./clients/clientRoutes');

const router = express.Router(); //notice the Uppercase R

// this file will only be used when the route begins with "/api"
// so we can remove that from the URLs, so "/api/users" become simply "/users"
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('./clients', clientRoutes);

// .. and any other endpoint related to the user's resource.

// after the route has been fully configured, we can then export it so that in can be required where needed.
module.exports = router; // standard convention dictates that this is the last line on the file.
```

As you can see, routers can use other routers.

The **userRoutes**, **productRoutes**, and **clientRoutes** remain unchanged(other than relocating them inside the API folder).

## Follow Along

Let's implement a simple API that returns strings but takes advantage of the Express Routers. Express routers are overkill for such a simple application.

// Create a folder and main server, initialize to create a json package, install nodemon and expresss.

in the index.js:

```
const express = require('express');

const server = express();

server.use('/', (req,res) => res.send('APIT is up and running!'));

// using port 9000 for this example
server.listen(9000, () => console.log('API is running on port 9000'));
```

Let's add our first router to manage the races resource.

* create a folder called races to host our router.
* create a file called raceRoutes.js and add the code:

```
const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  const races = ['human', 'elf', 'hobbit', 'wizard', 'dwarf', 'orc'];

  res.status(200).json(races)
});

module.exports = router;
```

Now open your index.js file and use the newly created router by following these steps:

* require the raceRoutes.js  file after requiring Express.
* use the race router to handle the /races endpoint.

Our index.js file should now look like this:

```
const express = require('express');

const raceRoutes = require('./races/raceRoutes');

const server = express();

server.use('/races', raceRoutes);

server.use('/', (req,res) => res.send('API is up and running'));

server.listen(9000, () => console.log('API is running on port 9000'));
```
