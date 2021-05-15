# JSON Web Tokens (JWT)

JWTs are a way to transmit information between parties in the form of a JSON object. The JSON information is most commonly used for authentication and information exchanges. In the former example, with authentication every JWT contains information. In the latter, JWTs contain the classic JSON data you've seen before.

Ultimately, JWT is a string that has 3 parts separated by a period. Those are:

* The header
* The payload
* The signature

## Header

The header contains the algorithm with the token type. Typically the header for the JWT looks like this:

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

the **alg** key specifies which algorithm was used to create the token. In this case, the algorithm is HMACSHA-256 and the type property classifies this token as being of the type JWT.

## Payload

The payload includes claims (fancy names for things like permissions for the user) Information or any other data we'd like to store in the token, which is most likely a user id. There are specific claimed in the JWT standard and you can also add custom properties to this object.

An example:

```
{
  "sub": "1234567890", // standard - subject, normally the user id
  "name": "John Doe", // custom property
  "iat": 1516239022 // standard - The Date the token was issued, expressed in seconds since epoch.
}
```

## Signature

To create a signature, we must create a string by base64 encoding the header and payload together, and then signing it with a secret.

Combining 3 parts, you get a JWT that looks like this:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## Overview

In this section, we'll use JSON Web tokens to handle authentication

To produce and verify the token, we'll use the **jsonwebtoken** npm module

## Follow Along

Let's produce and send a token on a successful login.

* add a jsonwebtoken to the projectd and require it into auth-router.js
* change the /login endpoing inside the auth-router.js to produce and send token.

```
// ./auth/auth-router.js

const jwt = require('jsonwebtoken'); // install this library

router.post('/login', (req,res) => {
    let { username, password } = req.body;

    User.findBy({ username })
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user); // new line

            // the server needs to return the token to the client
            // this doesn't happen automatically like it happens with cookies
            res.status(200).json({
              message: `Welcome ${user.username }!, have a token...`,
              token, // attach the token as part of the response
            })
          } else {
            res.status(401).json({message: "Invalid Credentials"})
          }
      })
      .catch(err => {
        res.status(500).json(err);
      })
})


function generateToken(user){
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username
    // other data
  };

  const options = {
    expiresIn: '1d', // show other available option in the library's documentation
  }

  // extra the secret away so it can be required and used where needed
  return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronoous
}
```

Add the **./config/secret.js** file to hold the **jwtSecret**

// the secret will be safely stored in an environment variable, these are place holders for development
```
module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'add a third table for many to many'
};
```
require secret.js into auth-router.js: const secrets = require('../config/secrets.js');

* Login with the student/hired user and show the token.
* Review the steps taken one more time.

We have a server that can produce and send JWTs on a successful login.
