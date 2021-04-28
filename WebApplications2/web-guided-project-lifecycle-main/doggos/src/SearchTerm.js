import React, { useState }  from 'react';
import axios from 'axios';

const SearchTerm = props => {
  const [searchTerm, setSearchTerm] = useState('');

  function changeHandler(e){
    setSearchTerm(e.target.value)
    console.log(e.target.value);
  }

  function submitSearch(e){
    e.preventDefault()
    console.log('running search submit');
    props.newSearch(searchTerm);
    setSearchTerm('');
  }

  return(
    <form onSubmit= {submitSearch}>
      <input name="searchTerm" value={searchTerm} onChange={changeHandler} />
    </form>
  )
}

export default SearchTerm;
