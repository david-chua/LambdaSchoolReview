# Dynamic and Best Practices

When you develop and run code on your machine, you run code in its development environment.

Most companies will have a testing environment similar to production. It has the same versions of software and runs on similar, albeit weaker, hardware. They do this to mitigate the risks when moving to production servers that clients use.

Ideally, all our environments run on the same stack, platforms, versions. Still it is common to have developers on the windows platform with the latest version of Node.js and the production server running on Linux with the latest stable version of NodeJS. For those cases, it is essential to have a testing/staging environment that also runs the Linux and NodeJS versions found on the production server. A staging environment can detect any regressions that may occur during deployment before code reaches the user.

## Follow along
Starter code: https://github.com/LambdaSchool/webapi-iv-guided


1. Configure a server script:

The server is not configured to run when t yping npm run server. It is also not using nodemon to restart on changes. Let's configure both.

* Add nodemon as a development-time dependency : npm install -D nodemon
* Open package.json and modify the "test" scrip tot read:

```
"server": "nodemon index.js"
```

* Test from a terminal

When we deploy the API, Heroku will look for "start" script that uses node to run the server. We need to add that script to package.json

2. Add a "start" script

Add a "start" script that uses node instead of nodemon to run index.js

```
"scripts": {
  "start": "node index.js",
  "server": "nodemon index.js"
}
```

After this change, Heroku knows how to start our server but needs to control which port the API will use. The port is hardcoded as 4000. You need to make it dynamic

3. Make the Port dynamic

* Introduce the process.env
* Introduce the dotenv npm module.
* Install the dotenv as production dependency
* Change index.js

```
// It's recommended to load configure for .env as early as possible
require('dotenv').config(); // add this line as the first thing to run

const server = require('./api/server.js');

// we'll read the port from the server environment if it is there.
// Heroku will have the PORT envionment set or use the port 5000.
const port = process.env || 5000;

// we can now use that port, if setup by heroku or read from .env or 5000 as default if not set.
server.listen(port, () => {
  console.log(`Server is running on localhost: ${port}`)
})
```

add a **.env** file to the root folder (next to package.json) with the following content

```
PORT = 4000
```

It is recommended to add **.env** to **.gitignore to prevent it from being uploaded to GitHub.

The reason is that most systems add configuration secrets to that file that are different between environments. Some examples are database connection credentials or API keys for external services.

* stop the server and restart it again or the server will not detect the changes to **.env**
* the API should be using port 4000 now specified in **.env**

## Follow Along - Deploy an Express API to Heroku:

Starter code: https://github.com/LambdaSchool/webapi-iv-guided

* Login to Heroku and create an app
* In the "Deploy" tab, select Github in the deployment method section
* Heroku will ask Github for authorization to access. You need to approve access.
* Search for the repository (their fork of the starter code) in the "Connect to Github" section and click connect.
* In the Automatic deploys section, pick the main branch and click "Enable Automatic Deploys"
  * Note that heroku automatically deploys to master. We strongly encourage you to use a **main** branch instead. You can override this automatic deployment using git push -f heroku main/master
* In the manual deploy section, click on "Deploy Branch" to kick off the first deployment.
* Scroll to the top and move to the "Overview" tab to see the deployment in action.
* On the top right, select "Open App"

the deployment succeeded, but opening the App fails because the fork on the Github still has the old code without the dynamic port and new start script

Our application displays **Application Error** and information on how to open the logs. We can fix it by pushing our changes to the main branch on Github.

* Commit and push the changes to the forked repository on Github
* Check the "Overview" tab on Heroku and wait for the message showing that Heroku deployed the applicaiton
* Refresh the browser where the application is running and there should be an empty array.

Use Postman to connect to the API and post a few shoutouts to the people that deserve it.


## Add an environment variable on heroku

* change the GET to / endpoint to include a message as part of the response
```
server.get('/', async (req,res) => {
  try {
    const shoutouts = await db('shoutouts');
    const messageOfTheDay = proces.env.MOTD || 'Hello World'; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch(err){
    console.log(error);
    res.status(500).json({error: "Cannot retrieve the shoutouts"});
  }
})

add the MOTD to the **.env** file

```
PORT=4000
MOTD=Hello from my computer

* Restart server running on local localhost
* request the API running on localhost to verify that the motd property is there
* commit and push to github
* once the new changes are deployed, refresh the application on Heroku. Note that we get the default **Hello World!**

Now we are going to add that configuration variable on Heroku

* on Heroku, go to Settings tab
* Click on reveal config vars in the "Config Vars" section
* add a **MOTD** config var with the value "Hello from the World Wide Web"
* refresh the application

Note the environment variable on Heroku overrides the value in code and the value in our local **.env** file. We can use environment variables to store API keys, database connection information and any other secrets in a more secure manner. 
