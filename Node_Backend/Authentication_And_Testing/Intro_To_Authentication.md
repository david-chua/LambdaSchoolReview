# Authentication and Testing

Authentication is one of the most extensive concepts that we get to tackle. When a user inputs data into a username/password form and clicks login, what happens to the data? How does the site the user is working with even know that its information pertains to that specific user? This has to do with authentication.

This concept is HUGE. People spend their entire careers hovering around the idea. Authentication includes the principles of server sessions, password encryption and hashing, security risks, JSON web tokens, and the use of the different types of middlewares and many other ideas. What we can tackle here in the "Web" portion of Lambda will pale in comparison to what can be learned outside of the curriculum.

## Introduction to Authentication

Authentication is the process by which our Web API verifies the identity of a client that is trying to access a resource. This is different from authorization, which comes after authentication and determines what type of access, if any, that a user should have.

Adding authentication to a Web API requires that an API can:

* register user accounts
* login to provide identity
* logout of the system to invalidate the user's access until they login again
* add a way for users to reset their passwords.

Proper authentication is difficult. There is a constant race between security experts coming up with innovative way to protect our information and attackers coming up with ways to circumvent those security measures.

Somethings we need to take into account when implementing authentications are:

* Password storage
* Password strength
* Brute-force safeguards

## Follow Along

Let's tackle the first one, password storage. The rule of thumb is **NEVER, EVER, under no circumstances, store user password in plain text**. Then what are the two main options:

* encryption
* hashing

## Password Hashing vs Encryption for Password storage.

* Encryption goes two ways. First it utilizes plain text and private keys to generate encrypted passwords and then reverses the process to match an original password.

* Cryptographic hashes only go one way: parameters + input = hash. It is pure; given the same parameters and input it generates the same hash.

If the database of users and keys are compromised, it is possible to decrypt the passwords to their original values, and this is bad because users often share passwords across different sites. This is why **cryptograph hashing is the preferred method of storing user passwords**.

## Password Strength

Password length alone is not enough to slow password guessing, but in general, long passwords are better than short, complicated passwords. It is a trade off between convenience and security.

## Brute Force Attach Mitigation

A common way that attackers circumvent hashing algorithms is by pre-calculating hashes for all possible character combinations up to a particular length using common hashing techniques. The results of said calculations are stored into a database known as a rainbow table. Whenever there is a breach, the attacker checks every breached password against their table.

Which Cryptographic Hashing Algorithms should we use? MD5, SHA-1, SHA-2, SHA-3? None of these, because they are flawed, these algorithms are optimized for speed, not security.

We aim to slow down hackers' ability to get a user's password. To do so, we are going to add time to our security algorithm to produce what is known as the **key derivative function**.

[Hash] + [Time] = [Key Derivation Function].

## Overview:

Instead of writing our own *key derivative function*, we'll use a well known and popular module called **bcryptjs**. This module is well supported and stable, but there are other options you can explore.

Bcryptjs features include:

* password hashing Function
* implements salting both manually and automatically
* accumulative hashing rounds.

Having an algorithm that hashes the information multiple times (rounds) means that an attacker needs to have the hash, known the algorithm used, and how many rounds were used to generate the hash in the first place.

## Follow Along - Using Bcrypt

1. Install Bcrypt using npm
2. Import in server:

```
const bcrypt = require('bcrypt');
```

To hash a password:

```
const credentials = req.body
const hash = bcrypt.hashSync(credentials.password, 14);
credentials.password = hash;

// move on to save the user.
```

To verify a password:

```
const credentials = req.body;

// find the user in the database by its username then
if (!user || !bcrypt.compareSync(credentials.password, user.password)){
  return res.status(401).json({error: 'Incorrect credentials'});
}

// the user is valid, continue on.
```

## Overview

Use **bcrypt.compareSync()**, passing the password guess in plain text and the password hash from the database to validate credentials.

If the password guess is valid, the method returns true. Otherwise, it returns false. The library hashes the password guess first then compares the hashes.

An example:
```
server.post('/api/login', (req,res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
      .first()
      .then(user => {
          // check if the passwords match
          if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({message: `Welcome ${user.username}!`});
          } else {
            // we will return 401 if the password or username are invalid.
            // we don't want to let the attackers know when they have a good username
            res.status(401).json({message: 'Invalid Credentials'});
          }
      })
      .catch(error => {
        res.status(500).json(error);
      });
})
```
## Overview - Sessions

Sessions provide a way to persist data across requests. We'll use them to save authentication information, so there is no need to re-enter credentials on every request the client makes to the server.

When using session, each client will have a unique session stored on the server.

Now that we have a solution for keeping authentication information, we need a way to transmit that information between the client and server. For that, we'll use cookies.

### Authentication Workflow for sessions
The basic workflow when using a combination of cookies and sessions for authentication is:

* Client sends Credentials
* Server verify credentials
* Server creates a session for the client.
* Server produces and sends back cookie.
* Client stores the cookie
* Client sends cookie on every request.
* Sever verifies that cookie is still valid.
* Server provides access to resource.

To understand how cookies are transmitted and stored in the browser, we need to look at the basic structure of HTTP message. Every HTTP message, be it a request or a response, has two main parts: the header and the body.

The headers are set of key/value stores that include information about the requests. There are several standard headers, but we can add our own if needed.

To send cookies, the server adds the **Set-Cookie** header to the response like so: "Set-Cookie": "session-12345". Notice how the value of the header is just a string. The browser will read the header and save a cookie called session with the value 12345 in this example. We will use a library that takes care of creating and sending the cookie.

The body contains the data portion of the message.

The browser will add the "Cookie": "session-12345" headers on every subsequent request and the server.

Cookies are not accessible from JavaScript or anywhere because they are cryptographically signed and very secure.

There are several libraries for handling session in Node.js, below are two examples:

* client-sessions
* express-session

We will use express-session.

## Common ways to store session data on the server:

* Memory
* Memory Cache (like Redix, and Memcached)
* Database.

## Cookies

* Automatically included on every request.
* Unique to each domain + device pair
* Cannot be sent to a different domain.
* Sent in the cookie header
* Has a body that can have extra identifying information
* Max size around 4KB.

## Storing session data in memory

* Data stored in memory is wiped when the server restarts.
* Causes memory leaks as more and more memory is used as the application continues to store data in session for different clients.
* Good for development due to its simplicity

## Using cookies to transfer session data.

Advantages when u sing cookies:

* A cookie is a small key/value pair data structure that is passed back and forth between client and server and stored in the browser.
* The server uses it to store information about a particular client/user.
* Workflow using cookies as session storage:
  * The server issues a cookie with an expiration time and sends it with the response.
  * Browser automatically store the cookie and send it on every request to the same domain.
  * The server can read the information contained in the cookie (like in the username)
  * The server can make changes to the cookie before sending it back to the response
  * Rinse and Repeat

## Express-session uses cookies for session management

Drawbacks when using cookie:

* Small size, around 40 kb
* sent in every request, increasing the size of request if too much information is stored in them.
* If an attacker gets a hold of a private key used to encrypt the cookie, they could read the cookie data.

## Storing session data in Memory Cache (preferred way of storing session in production applications)

* stored as key-value pair data in a separate server.
* the server still uses a cookie, but it only contains the session id.
* The memory cache server uses that session id to find the session data.

### Advantages

* Quick lookups
* Decoupled from the API server
* A single memory cache server can server many applications
* Automatically remove old session data.

### Drawbacks

* another server to setup and manage
* extra complexity for small applications
* hard to reset the cache without losing all session data.

## Storing session data in a database

* Similar to storing data in a memory store
* The session cookie still holds the session id.
* The server uses the session id to find the session data in the database
* Retrieving data from a database is slower than reading from a memory cache.
* Causes chatter between the server and the database.
* **Need to manage/remove old sessions manually** or the database will be filled with unused session data. Most libraries now manage this for you.

## Follow Along - Adding Web session to Web API

```
const session = require('express-session');

// configure express-session middleware
server.use(
  session({
    name: 'notsession', // default is connect.sid
    secret: 'nobody tosses a dwarf!',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: true // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in millisecond
    httpOnly: true, // don't let JS code access cookies. Browser extension run JS code in the browser
    resave: false,
    saveUninitialized: false
    })
  );
  ```

The resave option forces the session to be saved back to the session store, even if the session wasn't modified during the request.

The **saveUninitialized** flag, forces the session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie.

Now we can store data in one route handler and read it in another.

  ```
  app.get('/', (req,res) => {
    req.session.name = 'Frodo',
    res.send('got it');
  })

  app.get('/greet', (req,res) => {
    const name = req.session.name;
    res.send(`hello ${req.session.name}`);
  })
  ```

The server sends back a session id with every response, and the client then sends back that session id on every request.

**express-sesion** uses in memory storage by default.

Note how we generalized the session cookie name, to make it harder for attackers to know which library we're using to manage our sessions. This is akin to using a helmet to hide the **X-Powered-By-Express** header.

## Overview - Session activity.

Session remains active until they reach expiration time configured when they were created, but when a user logs out, we need to invalidate the session immediately.

We can do this by removing the session from our session-store. Each library does this differently.

 ```
  Add the following code for logout endpoint:

  server.get('/api/logout', (req,res) => {
      if (req.session){
        req.session.destroy(err => {
          if (err){
            res.send('error logging out');
          } else {
            res.send('good bye');
          }
        });
    }
  });

```

## Overview

We'll start by writing a piece of middleware we can use locally to restrict access to protected routes.

```
function protected(req,res,next) {
  if (req.session && req.session.userId){
    next();
  } else {
    req.status(401).json({message: 'you shall not pass!'});
  }
}
```

This middleware verifies that we have a session and that the **userId** is set. We could use **username** or other value to verify access to a resource.

Then, we add that middleware to the endpoints we'd like to protect.

```
server.get('/api/users', protected, (req,res) => {
    db('users')
      .then(users => res.json(users))
      .catch(error => res.json(error))
})
```

The /api/users endpoint is only accessible when the client is logged in. 
