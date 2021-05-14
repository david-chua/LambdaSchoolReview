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
