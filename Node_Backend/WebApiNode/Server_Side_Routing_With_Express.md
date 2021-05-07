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
