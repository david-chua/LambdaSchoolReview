import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
  });

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  const inputChange= e => {
    console.log('input change', e.target.value);
    setFormState({name: e.target.value})
  }

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
