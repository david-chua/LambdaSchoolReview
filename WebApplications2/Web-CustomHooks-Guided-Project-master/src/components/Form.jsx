import React, { useState } from 'react';

export default function Form({ user }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const onFnameChange = evt => {
    setFname(evt.target.value);
  };

  const onLnameChange = evt => {
    setLname(evt.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${lname}, ${fname}`);
  };

  return (
    <form
      className='component'
      onSubmit={onFormSubmit}
      style={{ borderColor: 'green' }}
    >
      <h5>{user}&apos;s best friend:</h5>
      <label>first name
        <input value={fname} onChange={onFnameChange} />
      </label><br />

      <label>last name
        <input value={lname} onChange={onLnameChange} />
      </label><br />

      <button>submit</button>
    </form>
  );
}
