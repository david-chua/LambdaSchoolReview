import React, { useState } from "react";

const NoteForm = (props) => {
  // Step 3: Set up state for FORM stored in note object. Note this is separate from index.js 'notes'
  // ALWAYS KEEP YOUR INPUT VALUES IN SYNC WITH FORM STATE.
  // this means each input / textarea / select should have value={to equivalent state value}

  const [note, setNote] = useState({ title: props.title, body: "" });
  // Step 4: Set up onChange event when input text changes (similar to our onClick event used with buttons)
  // This uses https://reactjs.org/docs/events.html#form-events
  const handleChanges = (event) => {
    // Step 5: Use text input value to update state
    // Step 12: Refactor inputs and handleChanges to use "name" in updating state

};

  // Step 8: Create submit form function with addNewNote prop

  // Step 13: Clear form onSubmit

  return (
    <form >
      {/* Step 2: Add <label> with htmlFor & update <input> id to create relationship b/t input and label*/}
      {/* Step 1: Create a basic <form> with <input> type=text inside to set up HTML form */}
      <label htmlFor="title">Title</label>
      <input id="title" type="text" placeholder="Enter title" />
      {/* Step 10: Setting Value with State in <input>*/}

      {/* Step 11: Add note <textarea> and update note state and  */}

      {/* Step 9: Submit form with button and onSubmit */}
    </form>
  );
};

export default NoteForm;
