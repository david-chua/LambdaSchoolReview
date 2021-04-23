# Advanced Form Management

Until this point, we've been working primarily with text inputs. Of course, forms can have many types of inputs like radio buttons, checkboxes, passwords, file uploads, and more.

Some input types provide an additional challenges when trying to control forms.

## Checkboxes

Just like we set the **value** attribute of inputs of type "text", with checkboxes, we care about the **checked** attribute.

In the example below, both boxes would appear checked (and would be read-only, lacking an **onChange** handler).

```
<input type="checkbox" name="nameOfChoice" checked/>
<input type="checkbox" name="anotherOne" checked={true} />
```

Without the **checked** attribute or the attribute set to false, the boxes would appear unchecked.

```
<input type="checkbox" name="nameOfChoice" />
<input type="checkbox" name="anotherOne" checked={false} />
```

### Controlling inputs

Controlling checkboxes, buttons, and non-text fields can be tricky.

The following example would create a checkbox with a checked status that depends on state.

```
<label>
  Check this box if you are going:
  <input
    name="isGoing"
    type="checkbox"
    checked={formState.isGoing} // The expression `formState.isGoing` evaluates true or false
    onChange={handleChange}
  />
</label>
```

## Dropdowns

Drop down menus are really important for gathering data because they assure data quality.
They are built with the **select** element, with **option** element nested inside.

The dropdown below draws its value from the formState.bestie, which contains a string ("1" through "4"). If the string were "3" for example, the "Monica" option would display as selected.

```
<label>
  Select you Best friend:
  <select value={formState.bestie} onChange={handleChange} name="bestFriend">
    <option value="1">Ross</option>
    <option value="2">Rachel</option>
    <option value="3">Monica</option>
    <option value="4">Phoebe</option>
  </select>
</label>
```

## Follow Along

Let's build up a form to gather user information with radio buttons, a checkbox, and a dropdown.

1. Set up the form. Using our knowledge from the "form management" module, we'll first set up a basic form with a single text input. We will spin up some additional state to drive the rest of the inputs we will create.

```
import React, { useState } from 'react';

export default function App(){
  // The state `form.isGoing` will drive a checkbox and is a boolean, whereas the rest are strings
  const [form, setForm] = useState({ user: '', ageRange: '', state: '', isGoing: false });

  const handleChange = event => { console.log('changing!') };

  return (
    <div className="App">
      <form>
        <label>User Name:
          <input value={form.user} name="user" type="text" onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}
```

2. Add Radio Buttons. If we wanted to gather categorical data like age range, we might use radio buttons. Note how all the inputs of type "radio" share the same name and have hard-coded values. The checked attribute is a boolean which is calculated using state:

```
<label>13-18
  <input
    name="ageRange" type="radio" value="a"
    checked={form.ageRange === "a"} onChange={handleChange}
  />
</label>

<label>19-24
  <input
    name="ageRange" type="radio" value="b"
    checked={form.ageRange === "b"} onChange={handleChange}
  />
</label>

<label>25+
  <input name="ageRange" type="radio" value="c"
  checked={form.ageRange === "c"} onChange={handleChange}
/>
</label>
```

3. Add a Dropdown. Another way to gather categorical data is through a dropdown. Let's add one here to ask which state the user lives. For illustration purposes, we'll only add a few states, but you could  easily use an array and .map method to add all 50 states.

```
<label>State:
  <select value={form.state} name="state" onChange={handleChange}>
    <option value="">--select a state--</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
  </select>
</label>
```

4. Add a checkbox. Checkboxes are a great way to gather boolean data.

```
<label>RSVP:
  <input
    name="isGoing"
    type="checkbox"
    checked={form.isGoing}
    onChange={handleChange}
  />
</label>
```

5. Implement the change handler. Since all the inputs get their values(or checked statuses) from state, we need a working change handler if we ever want those values to change.

Note that every time an input suffers a "change event", our code needs to figure out whether it was a checkbox or something else. This information can easily be found inside event.target, which points to the input that fired the event. For checkboxes, we care about the boolean stored inside their "checked" attribute, and in the case of other inputs we are interested in the string contained inside their "value" attribute.

```
const handleChange = event => {
  const { name, type, value, checked} = event.target;

  const updatedInfo = type === 'checkbox' ? checked: value;

  setForm({ ...form, [name]: updatedInfo });
}
```

## Passwords

When you try to make your password "password" and the form tells you to chose a stronger password? That's called validation. There are many ways to validate input before you submit the form to a server or other service and they're all really useful for insuring the quality of data.

One common strategy is to compare the input string to a regular expression model of expected characters and handle the input based on the results of the comparison.

Another popular method is to have a library such as **Yup** handle the validation for us. Yup has build in methods to deal with email addresses, passwords, strings, numbers, and more.

### Validating a String

Using yup to validate a string, after installation
We can simply declare a schema with **let schema = yup.string();** and test our schema on the new line with **await schema.isValid('hello world');. this would return to true since "hello world" is a string.

### Validating a form

Form validation is slightly more complicated but it follows the same logical pattern. First, we declare a schema then we validate the data.

In a forms app, the schema defines what the form looks like. It is kind of like a form outline, telling yup what the existing fields are and how they should be validated.

```
import React from "react";

  // Basic submit event handler and console.log to confirm form submitted
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  // Create state for the form values. We will want to update state later on, but for now... empty strings!
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    password: ""
  });

// Define form elements: email, password and terms/conditions
function LoginForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>
      <button>Submit!</button>
    </form>
  );
```


To start the validation process, add Yup as a dependency
```
npm install --save Yup
```

and in our file, import:
```
import * as  Yup from "yup";
// You may see this as (import Yup from 'yup') in some tutorials.
```

Next we will define our schema, which basically is a description of what each name field is supposed to look like so that Yup can pass or fail the input. Give it a shape of all the elements in your form. Depending on what you're trying to validate  you give it strings, checkboxes, etc.

```
const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .required("Password is Required")
    .min(6, "Passwords must be at least 6 characters long."),
  terms: Yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
    // required isn't required for checkboxes.
});
```

formSchema is a lot like a propType definition because you need to tell Yup what the shape of the data is suppose to take.

the customization part is pretty straightforward. For the **email** field, Yup is looking for a string that looks like an email-pattern, you need to have this field (it's required)

The password schema shows you that you expected a string with a minimum of 6 characters. Additionally, the user shouldn't be able to submit the form without a pasword.

Next up we'll create state for the form values, Just like earlier, this is the initial state values for each input in the form.

Next up, state for error messages.

```
// State for the error messages
const [errors, setErrors] = useState({
  email: '',
  password: '',
  terms:''
})
```

We're going to change the state of the button so that when we're filling out the form it won't be able to submit until the validation passes. The forms will submit even if the validation is failing, we're using the button's state to disable the button. Ultimately though, the form state still controls wether or not the form can be submitted.  

```
/* Each time the form value state is updated, check to see if it is valid per our schema.
This will allow us to enable/disable the submit button.*/

useEffect(() => {

  /* We pass the entire state into the entire schema, no need to use reach here.
  We want to make sure it is all valid before we allow a user to submit
  isValid comes from Yup directly */

  formSchema.isValid(formState).then(valid => {
    setButtonDisabled(!valid);
  });
}, [formState]);
```

The last thing we need to do before validating the form is set up an event handler called inputChange and pass in the event parameter.

```
const inputChange = e => {
  // let's pull the information of interest from the target of the event
  const { name, value } = e.target
```

Finally let's set up our validation. This is probably the trickiest part of the form validation. Here, our synthetic event handler holding the forms input data will be tested against our schema from before. Then, we'll use some conditional logic with .then and .catch to display error messages or not, and to change the state.


```
  // yup.reach will allow us to "reach" into the schema and test only one part.
  // We give reach the schema as the first argument, and the key we want to test as the second.
  yup
    .reach(formSchema, name)
    //we can then run validate using the value
    .validate(value)
    // if the validation is successful, we can clear the error message
    .then(valid => {
      setErrors({
        ...errors, [name]: ""
      });
    })
    // if the validation is unsuccessful, we can set the error message to the message
    // returned from yup (that we created in our schema)
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      });
    });

  // Whether or not our validation was successful, we will still set the state to the new value as the user is typing
  setFormState({
    ...formState, [name]: value
  });
};
```

When the validation isn't successful, we need to display an error message to the user in the JSX, letting them know how to fix the problem

```
function LoginForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      { errors.email.length > 0 && <p className="error">{errors.email}</p> }

      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      { errors.password.length > 0 && <p className="error">{errors.password}</p> }

      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>

      <button>Submit!</button>
    </form>
  );
```

## HTTP request  - POST request

When our client applications need to work with data from a server and database, we transmit data back-and-forth using HTTP. This is a protocol that allows communication between web browsers and bweb servers.

You've previously learned how to use **GET** request but we're going to take it a step further by submitting a data to a web server. Within the HHTP protocol, a **POST** request is a HTTP Request method. to be precise, it is the method that allows us to "post" (create) information on a web server. When a user makes a **POST** request, they are adding data to the server's database.

to make our **POST** request to our database, we're going to bring **axios**, a promise-based library that makes it easy for us to transmit data to- and from our web servers .

To install:

```
npm install axios
```

Now we can write a post request anywhere in our component. Let's look at the code we'll write to do this:

```
const sentData = { data: "Hello World!" };

axios
  .post("https://yourdatabaseurlgoeshere.com", sentData)
  .then(res => {
    console.log(res.data); // Data was created successfully and logs to console
  })
  .catch(err => {
    console.log(err); // There was an error creating the data and logs to console
  });
```

Notice that we are calling **axios** library but using a .post() call instead of a **.get()** after it. We then follow that up with a URL passed in as an argument. Unlike the **.get()** requests that you've done before, we also pass in the data that we want to send to our web server as the second argument. In this example, the data we're sending is our **sentData** variable, which is an object.

The promise created by **axios** will then resolve into a successful response or reject with an error. We're using **console.log()** here but you will typically write logic inside the **.then()** and the **.catch()** that may include:

1. Setting data into state in your component
2. Alerting the user to an errors
3. Use the new data to create side effects in your components(s) that modify the interface for your user in som eway.

For instance, a **POST** request might return a response (or res) like the following:

```
{
  error: false,
  data: { data: "Hello World!" },
  message: "Your data was successfully created."
}
```

### Follow Along

Let's take a look at how we would integrate this **POST** request into our Yup form. In particular, notice what we're doing in our **handleSubmit** function

1. create a new state called setPost. This will be where we're going to store data on a valid form submit. Once we have the data we'll work to console.log and display it.

```
// new state to set our post request too. So we can console.log and see it.
const [post, setPost] = useState([]);

useEffect(() => {
  formSchema.isValid(formState).then(valid => {
    // console.log(valid);
    setButtonDisabled(!valid);
  });
}, [formState]);
```

2. Post to a database from req, res. Inside of our form submit event handler, we're going to add a post request with axios and update formState. Once formState is filled out, this post all of the input information to setPost.

For all our examples, we're going to make use of the **req,res** API This API allows us to make real post reqeust to a real server and get real responses. Until you learn to set up your backedn in Unit 4, this is a powerful dev tool.  The post to https://reqres.in/api/users accomplishes that.

```
// this handles what happens when we submit the form. We want to prevent the default
  //form submission from the browser and control what happens when we submit.
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  };
```

1. Display data. For our purposes, we'll just display data to the DOM, instead of doing something with it on a server. For that we will use **JSON.stringify** to display data in both the DOM and the console.

```
/* displaying our post request data */
      <pre>{JSON.stringify(post, null, 2)}</pre>
```

In this example, our axios call to the api now runs whenever we submit the form and run the handleSubmit button. Our form now takes in user data and when the user clicks the "submit" button, it will **POST** the user's data to the web server. 
