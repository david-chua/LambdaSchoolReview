import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  const [post, setPost] = useState([])
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    motivation: "",
    positions: "",
    terms: ""
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    motivation: "",
    positions: "",
    terms: ""
  })

  const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    email: yup.string().required('Email is required'),
    terms: yup.boolean().oneOf([true], 'terms and cordition must be checked'),
    positions: yup.string(),
    motivation: yup.string().required('Must say why')
  });

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type==="checkbox"? e.target.checked: e.target.value)
      .then(valid => {
        setErrors({...errors, [e.target.name]: ""})
      })
      .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
  }

  useEffect(() => {
    formSchema.isValid(formState).then(valid =>{
      setIsButtonDisabled(!valid);
    });
  }, [formState])

  const formSubmit = e => {
    e.preventDefault();
    axios.post("https://reqres.in/api/users", formState)
    .then(response => {
      setPost(response.data)
      setFormState({
        name: "",
        email: "",
        motivation: "",
        positions: "",
        terms: ""
      })
    })
    .catch(error => {
      console.log(error.response);
    })
  };

  const inputChange= e => {
    e.persist()
    const newFormData ={
      ...formState,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
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
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
      </label>
      <label htmlFor="motivation">
      Why would you like to volunteer?
        <textarea
        name="motivation"
        id="motivation"
        value={formState.motivation}
        onChange={inputChange}
        />
        {errors.motivation.length > 0 ? <p className="error">{errors.motivation}</p> : null}
      </label>
      <label htmlFor="positions">
      What would you like to help with?
        <select
        id="positions"
        name="positions"
        value={formState.positions}
        onChange={inputChange}
        >
        <option value="Newsletter">Newsletter</option>
        <option value="Yard Work">Yard Work</option>
        <option value="Admin Work">Admin Work</option>
        <option value="Tabling">Tabling</option>
        </select>
        {errors.positions.length > 0 ? <p className="error">{errors.positions}</p> : null}
      </label>
      <label htmlFor="terms" className="terms">
        <input
        type="checkbox"
        name="terms"
        id="terms"
        checked={formState.terms}
        onChange={inputChange}
        />
        Terms & Conditions
        {errors.terms.length > 0 ? <p className="error">{errors.terms}</p> : null}
      </label>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={isButtonDisabled}>Submit</button>
    </form>
  );
}
