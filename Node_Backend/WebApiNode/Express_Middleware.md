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
