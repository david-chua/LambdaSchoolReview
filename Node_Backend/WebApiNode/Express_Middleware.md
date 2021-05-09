# Express Middleware

There are different types of middleware for our purposes that we'll group into three categories.

1. Built-in middleware
2. Third-party Middleware
3. Custom Middleware

## Built-in Middleware

**Built in middleware** is included with Express but not added to the application automatically. Like the other types, we need to opt-in to use it in our application.

We saw an example of built-in middleware when we added support for parsing JSON content out of the request body using **server.use(express.json())**

Every type of middleware works the same way. We tell Express about the middleware we want to turn on for our application by making a call to **.use()** on our server and passing **.use()** the piece of middleware we want to apply. This line must come after the server has been created by calling **express()**.

## Third-party Middleware

**Third-party Middleware** are npm modules that we can install and then import into our application using **require()**. There are thousands of middleware modules we can use. There is no need to write our own in most cases.

Some popular middleware modules are:

* morgan
* cors
* helmet

## Custom Middleware

**Custom Middleware** are functions written to perform specific tasks.

## Follow Along

One thing that is not immediately obvious is that route handlers are middleware.

Seeing this in action:

Suppose a client visits a non-existent endpoint in our current implementation. In that case, they will get a default message when a resource is not found on the server. In the case of a browser, it's Cannot Get URL. This default message makes for a poor user experience.

```
function(req,res) {
  res.status(404).send("Ain't nobody got time for that!");
}
```

This code is not complete yet, but you can see that it is, in fact, a request handler function. We know because the req and res are there.

Now let's use it as a middleware:

```
server.use(function(req,res){
    res.status(404).send("Ain't nobody got time for that!")
});
```

Almost there! The last step is adding this status after each route handler. That way, if the preceding middleware or route handlers do not respond to the request, this will become our catch-all and respond with the correct status code and a helpful message.

## Writing a custom middleware

Writing **custom middleware** is a two step process:

1. Write a function that will receive three or four arguments.
2. Add it to the middleware queue

Let's tackle the first part with an example. We'll write middleware that logs information about every request that comes into our server. We'll be displaying the information in the console window to keep things simple.

```
function logger(req,res, next){
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin'
    )}`
  );

  next();
}
```

We can see that a middleware function takes three parameters:
1. the request object
2. the response object
3. a function that points to the next middleware in the queue.

By convention, we name the third parameter **next**.

Any middleware in the queue CAN modify both the request and response object, but it's NOT required. In this case, we are not making changes to either.

Any middleware in the queue can stop the request and send a response back to the client. When that happens, the rest of the middleware, including the route handlers, will not work. We'll see an example of this in the code along.

Calling the **next()** function signals to Express that the middleware has finished, and it should call the next middleware function. If **next()** is not called a response is not sent back to the client, the request will hang, and clients will get a timeout error. So, make sure always to call the **next()** or use one of the methods that send a response back like **res.send()**  or **res.jsion()**.

Let's add our middleware to the queue:
```
server.use(logger);
```

Hitting any of our endpoints will display some information about the request in the console.

## Follow Along:

Any middleware in the queue can stop the request and send a response back to the client. When that happens, the rest of the middleware, including the route handlers, will not be executed.

Start by defining a function that shows our current predicament at the console as the application loads

```
function atGate(req,res,next){
  console.log('At the gate, about to be eaten');

  next();
}
```

Then add it as the first middleware in the queue.

```
server.use(atGate);
```

This middleware is what's called the global or application wide middleware. It applies to every endpoint in our server. Accessing any route in our server should display the message on the console.

Now let's add the authentication middleware that only grants access if we hit the correct route. picking any route is futile.

```
function auth(req,res,next){
  if (req.url === '/mellon'){
    next();
  } else {
    res.send('You shall not pass');
  }
}
```

Now let's add a route handler that leads to safety:

```
server.get('/mellon', auth, (req,res) => {
    console.log('Gate opening ...');
    console.log('Inside and safe');
    res.send('Welcome traveler')
})
```

What's new here is that we are adding our middleware as the second parameter and the route handler as the third. Using middleware this way is what we call local middleware or route middleware. It just means we are using middleware locally and only applies to the endpoint where it's added.

## Overview

When our application encoutners an error in the middle of executing middleware code, we can choose to hand over control to error handling middleware by calling next() with one argument. It is a standard convention to make the argument be an error object like this: **next(new Error("error message"))**

This middleware type takes four arguments: **error**, **req**, **res**, **next**. We pass the first argument when calling **next(new Error('error message here'))**. When the error handling code is finished, we can choose to end the request or call next without arguments to continue to the next regular middleware.

Error handling middleware can be placed anywhere in the stack, but it makes the most sense to put it at the end. Suppose the intention is for the middleware to handle errors that may occur elsewhere in the queue. In that case, it needs to run after the rest of the middleware has run.

## Follow Along

Let's see this error-handling middleware code. First, let's write an endpoint that sends a file to the client in response to a get request to the **/download** endpoint.

```
const express = require('express');
const path = require('path');

const server = express();

server.get('/download', (req,res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

server.liste(5000);
```

If we run over our server and make a **GET** request to /download, the server will crash since there is no index.html file to send. We need to rewrite our endpoint and take advantage of the fact that **res.sendFile** supports a callback function as a second argument. This callback function will r un after the file is sent. It will also run if there is an error in the process of sending the file.

```
// note we added the third parameter here: next
server.get('/download', (req,res,next) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath, err => {
        // if there is an error the callback function will get an error as it's first argument
        if (err) {
          // we could handle the error here or pass it down to error-handling middleware like so:
          next(err); //call the next error handling middleware in the queue.
        } else {
          console.log('File send successfully');
        }
    })
})
```

Now let's add error-handling middlware to our server. We can create the middleware function and then use it like any other middleware or do it online. Bellow an example of using it inline.

```
server.use((err,req,res,next) => {
    console.log(err);

    res
      .status(500)
      .json({message: "There was an error performing the rquired operation"})
})
```

This middleware will only get called if any other middleware or route handler that comes before it has called **next()** with an argument like in the **/download8* endpoint above.

The complete code for the server will now look like:

```
const express = require('express');
const path = require('path');

const server = express();

server.get('/download', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, err => {
    // if there is an error the callback function will get an error as it's first argument
    if (err) {
      // we could handle the error here or pass it down to error-handling middleware like so:
      next(err); // call the next error-handling middleware in the queue
    } else {
      console.log('File sent successfully');
    }
  });
});

server.use((err, req, res, next) => {
  console.error(err);

  res
    .status(500)
    .json({ message: 'There was an error performing the required operation' });
});

server.listen(5000);
```
