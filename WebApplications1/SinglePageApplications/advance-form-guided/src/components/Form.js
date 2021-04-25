import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    motivation: "",
    positions: "",
    terms: ""
  });

  const [error, setErrors] = useState({
    name: "",
    email: "",
    motivation: "",
    positions: "",
    terms: ""    
  })
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
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
        />
      </label>
      <label htmlFor="motivation">
      Why would you like to volunteer?
        <textarea name="motivation" />
      </label>
      <label htmlFor="positions">
      What would you like to help with?
        <select id="positions" name="positions">
        <option value="Newsletter">Newsletter</option>
        <option value="Yard Work">Yard Work</option>
        <option value="Admin Work">Admin Work</option>
        <option value="Tabling">Tabling</option>
        </select>
      </label>
      <label htmlFor="term" className="terms">
        <input type="checkbox" name="terms" checked={true} />
        Terms & Conditions
      </label>
      <button>Submit</button>
    </form>
  );
}
