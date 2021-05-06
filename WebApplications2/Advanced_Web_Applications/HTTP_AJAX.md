# HTTP: AJAX

**PUT** is the "U" in CRUD, and it stands for UPDATE. We use the **PUT** method to change a resource's information. **PUT** takes in a body  object like **POST** and identifies that data needs to be updated somewhere.

```
axios
  .put(`http://somecoolrurl.com/${couldHaveDymaicId}`, updatedData)
  .then(response => {
    response is the response we get back from the server
  })
  .catch(err => {
      if something goes wrong, we handle any errors here.
  })
```

We are going to work on updating a quote. To set this up, we build a form for the **PUT** request. Usually, you would be in charge of populating the form fields with whichever items you are updating, but for this example, we hardcoded a quote into state. Keep in mind that in apps you build from scratch, populating the form fields may take a bit of work.

Now, in **index.js**, there is a **putMessage** function. Let's call **axios.put**  and pass in the URL. This time the endpoint will be **/quote/:id**. Id here is a lot like dynamic parameter in React Router. It is a dynamic variable that will be the id of whatever item you are updating. Just hardcode any number in there for this example. Also, add  your **.then()** and **.catch()** and console.log the **response** and **err** inside those:

```
axios
  .put(`https://lambda-shcoool.test-apis.herokuapp.com/quotes/76`)
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

Also, pass in quote as a parameter to **putMessage** so that we have the data to send to the server.

```
putMessage = quote => {
  axios
  .put(`https://lambda-shcoool.test-apis.herokuapp.com/quotes/76`)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}
```

Pass **putMessage** down to the **PutMovieQuoteForm** Component. Then go to **PutMovieQuoteForm.js** and invoke **this.props.putMessage** with the movie quote that is one state.

index.js
```
<PutMovieQuoteForm putMessage={this.putMessage} />
```

PutMovieQuote.js
```
putMessage = e => {
  e.preventDefault();
  this.props.putMessage(this.state.movieQuote);
}
```

Now we can make some requests and check out the console.log. They are very similar in the logs we were getting in the POST section above. So we are going to handle this request like we did the POST request. On state we have **putSuccessMessage** and **putError**. Let's see our successMessage to state in our **.then()** and the error message to state in the **.catch()** And like before, we'll clear out the opposite state property in each case.

```
putMessage = quote => {
  axios
    .put('https://lambda-school-test-apis.herokuapp.com/quotes/76', quote)
    .then(resposne => {
      this.setState({
        putSuccessMessage: response.data.successMessage,
        putError: ""
      })
    })
    .catch(err => {
        this.setState({
          putSuccessMessage: "",
          putError: err.response.data.Error
        })
    })
}
```
Then pass down **putSuccessMessage** and **putError** to **PutMovieQuoteForm** and make some requests.

```
<PutMovieQuoteForm
  putMessage={this.putMessage}
  putSuccessMessage = {this.state.putSuccessMessage}
  putError={this.state.putError}
/>
```

## Delete HTTP request

This method is the "D" in CRUD. We use this to delete or destroy data that lives away from our webpage. When we call .delete, we're instructing the server to remove some information somewhere. Typically we initiate deletion by sending some identifying piece of information on the URL parameter along with our requested URL string. The URL string will be a dynamic field that we'll need to ensure matches the resource that we want to be destroyed.

REMEMBER body objects (or data) objects are to be used with PUT, POST, and PATCH (we don't need to go patch into here).
Don't expect the **axios.delete()** method to be able to take in a data object.

```
axios
  .delete(`http://somecoolurl.com/${someDynamicId}`)
  .then(res => {
      response is the response from server
  })
  .catch(err => {
      if there's an error, it goes here.
  })
```

## Follow Along - deleting anitem.

We're going to work on deleting a quote. To set it up, we have a quote displayed in the delete tab. In real-world apps, you would get to this page by clicking on a quote in some quotes list. On this page, there is a delete button, and in that real-world app, there may also be a way to delete a quote straight from the quote list.

There is one final thing to note. Delete is dangerous. Often times delete buttons invoke some kind of confirmation message, usually in a modal, that asks you if you are sure you want to delete that thing. We won't worry about that here, but consider that when you are implementing deletes in the future.

In **index.js**, there is a **deleteMessage** function. Let's call **axios.delete** and pass in the URL. The endpoint will be **/quote/:id**.
Like in the put function, **:id**  here is a dynamic variable that will be the id of whatever item you are deleting. Just hardcode any number in there for this example. Also, add your **.then** and **.catch()** and console.log the resposne.

```
deleteMessage = () => {
  axios
    .delete(`https://lambda-schoool-test-apis.heroku.app/quotes/42`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
};
```

Pass **deleteMessage** down to the **DeleteMovieQuoteForm** component. Then we'll go into **DeleteMovieQuoteForm.js** and invoke **this.props.deleteMessage**.

index.js
```
<DeleteMovieQutoeForm deleteMessage={this.deleteMessage} />
```

DeleteMovieQuote.js
```
deleteMessage = e => {
  e.preventDefault();
  this.props.deleteMessage(this.state.movieQuote);
};
```

Now we can make some request and check out the console.logs. They are very similar to the logs we were getting in the **POST** and **PUT** sections above.

We are going to handle this request like we did with **POST** and **PUT**. On state we have **deleteSuccessMessage** and **deleteError**. Let's set our successMessage to state our **.then()** and our errorMessage to state in the **.catch()**.

```
deleteMessage = () => {
  axios
    .delete('https://lambda-schoool-test-apis.heroku.app/quotes/42')
    .then(res => {
      deleteSuccessMessage: response.data.successMessage,
      deleteError: ""
    })
    .catch(err => {
        this.setState({
          deleteSuccessMessage: "",
          deleteError: err.data.Error
        });
    })
}
```

Then pass down **deleteSuccessMessage** and **dleeteError** to deleteMovieQuoteForm, and make some request.

```
<DeleteMovieQuoteForm
  deleteMessage={this.deleteMessage}
  deleteSuccessMessage={this.state.deleteSuccessMessage}
  deleteError={this.state.deleteError}
/>
```
